import React from 'react'
import { useRouter } from 'next/router';

interface Props {
  page: number,
  setPage: (page: number) => void
}

export default function Pagination({ page, setPage }: Props) {
  const router = useRouter();

  function handlePrevClick() {
    const forwardPage = page > 0 ? page - 1 : 0;
    setPage(forwardPage)
    return router.push(`?page=${forwardPage}`)
  }
  function handleNextClick() {
    const forwardPage = page + 1;
    setPage(forwardPage)
    return router.push(`?page=${forwardPage}`)
  }
  return (
    <div>
      {page > 0 && <button onClick={handlePrevClick}>Previous page</button>}
      <button onClick={handleNextClick}>Next page</button>
    </div>
  )
}
