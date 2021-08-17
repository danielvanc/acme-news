import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router';
import client from 'utils/client';
import Comments from 'components/comments';

interface CommentsProps {
  data: object
}

interface ArticleProps {
  title: string,
  content: any,
  data: Array<CommentsProps>
}

type Props = {
  data: Array<ArticleProps>
}

export default function Article(props: Props) {
  const router = useRouter();
  const { page } = router.query;
  const backLink = page ? `/?page=${page}` : '/'
  const type = "paragraph"
  const { title, content } = props.data[0];

  return (
    <div>
      <Link href={backLink}><a>Back to previous page</a></Link>
      <h1>{title}</h1>
      {content
        .filter(contentType => contentType.type === type)
        .map((item, index) => {
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: item.data.text }}
          />
        )
        })}
      <Comments />
    </div>
  )
}


/*
  Because of the nature of the way the API's are structured,
  I'm having to use server request instead of
  static request because we need to query a seperate api
  to get the article data.
  Would have been nice to use static generated data but
  because the api is paginated and there isn't a direct 
  route to them all to build out the paths (which nextjs needs).
  only alternative was to get by server request.
*/ 
export async function getServerSideProps(context) {
  // TODO: Use caching for this?
  const articleApi = process.env.ARTICLE_API
  const articleId = context.params.id;
  const url = `${articleApi}${articleId}?include=clapsCount,commentsCount`
  const token = process.env.ARTICLE_TOKEN
  const articles = await client(url, { token })

  const hasComments = articles?.data && articles.data.comments_count
  let comments = 0

  // Only fetch comments if there are any
  if (hasComments) {
    const commentsApi = process.env.ARTICLE_COMMENTS_API;
    const commentsUrl = `${commentsApi}${articleId}/comments/0`
    comments = await client(commentsUrl)
  }

  const data = [articles.data, hasComments ? comments.data : []]

  return {
    props: { data }
  }
}