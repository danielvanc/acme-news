import { useQuery } from "react-query";
import client from 'utils/client'

export function useFetchArticles(page = 0) {
  return useQuery(['articles', page], async () => {
    const { data } = await client(`${process.env.NEXT_PUBLIC_ARTICLES_API}${page}`)
    return data;
  }, { keepPreviousData: true, staleTime: 3000 })
}