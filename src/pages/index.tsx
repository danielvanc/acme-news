/** @jsxImportSource @emotion/react */

import React from 'react'
import { Spinner } from "components/lib";
import { useFetchArticles } from "utils/hooks";
import Article from 'components/article';
import Pagination from 'components/pagination'

export default function Home() {
  const [page, setPage] = React.useState(0)
  const { data, isLoading, isSuccess } = useFetchArticles(page)

  return (
    <div>
      <h1>Acme News</h1>

      {isLoading && (
        <div css={{ width: "100%", margin: "auto" }}>
          <Spinner />
        </div>
      )}

      {(isSuccess) && (
        <div>
          {data.map(article => (
            <Article article={article} key={article.id} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}
