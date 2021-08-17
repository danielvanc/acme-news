import React from 'react'
import Link from 'next/link'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
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

export default function ArticlePage(props: Props) {
  const { data } = useQuery('posts', getPost)
  const { title, content } = data[0]
  const type = "paragraph"

  return (
    <div>
      <Link href="/"><a>Back to articles</a></Link>
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
      <Comments comments={data[1]} />
    </div>
  )
}

async function getPost(url, token, articleId) {
  const articles = await client(url, { token  })
  let comments = []
  const hasComments = articles?.data && articles.data.comments_count
  
  if (hasComments) {
    const commentsApi = process.env.ARTICLE_COMMENTS_API;
    const commentsUrl = `${commentsApi}${articleId}/comments/0`;
    comments = await client(commentsUrl)
  }

  const data = [articles.data, hasComments ? comments.data : []]

  return data;
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
  const queryClient = new QueryClient()
  const articleApi = process.env.ARTICLE_API
  const articleId = context.params.id;
  const url = `${articleApi}${articleId}?include=clapsCount,commentsCount`
  const token = process.env.ARTICLE_TOKEN

  await queryClient.prefetchQuery('posts', () => getPost(url, token, articleId))
 
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}