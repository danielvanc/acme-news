import client from 'utils/client';

export async function getPost(url, token, articleId) {
  const articles = await client(url, { token  })
  const hasComments = articles?.data && articles.data.comments_count
  let comments = []
  
  if (hasComments) {
    const commentsApi = process.env.ARTICLE_COMMENTS_API;
    const commentsUrl = `${commentsApi}${articleId}/comments/0`;
    comments = await client(commentsUrl)
  }

  return [articles.data, hasComments ? comments.data : []];
}
