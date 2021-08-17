import React from 'react'
import client from 'utils/client'
import { useRouter } from 'next/router';
import Article from 'components/article';
import Pagination from 'components/pagination'

async function getData(page: string) {
  const articlesAPI = `${process.env.NEXT_PUBLIC_ARTICLES_API}${page}`
  return await client(articlesAPI)
}

export default function Home() {
  const router = useRouter()
  const { page: currentPage } = router.query
  const [page, setPage] = React.useState(currentPage || 0)
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    getData(page).then(setArticles)
  }, [page])

  React.useEffect(() => {
    if (articles) console.log('articles', articles)
  }, [articles])

  return (
    <div>
      <h1>Acme News</h1>

      {articles && articles?.data && (
        <div>
          {articles.data.map(article => (
            <Article article={article} key={article.id} page={page} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}
