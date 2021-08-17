import React from 'react'
import { StyledButton } from "components/lib";

interface Props {
  page: number,
  setPage: (page: number) => void,
}

export default function Pagination({ page, setPage }: Props) {

  function handlePrevClick() {
    const forwardPage = page > 0 ? page - 1 : 0;
    setPage(forwardPage)
  }
  function handleNextClick() {
    const forwardPage = page + 1;
    setPage(forwardPage)
  }
  return (
    <div>
      {page > 0 && <StyledButton onClick={handlePrevClick}>Previous page</StyledButton>}
      <StyledButton onClick={handleNextClick}>Next page</StyledButton>
    </div>
  )
}
