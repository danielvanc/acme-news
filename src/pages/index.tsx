/** @jsxImportSource @emotion/react */

import React from 'react'
import { useQuery } from "react-query";
import client from 'utils/client'
import Article from 'components/article';
import Pagination from 'components/pagination'
import { Spinner } from "components/lib";

function useFetchArticles(page = 0) {
  return useQuery(['articles', page], async () => {
    const { data } = await client(`${process.env.NEXT_PUBLIC_ARTICLES_API}${page}`)
    return data;
  }, { keepPreviousData: true, staleTime: 3000 })
}

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
