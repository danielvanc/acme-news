import type { NextPage } from 'next'
import Head from 'next/head'
import client from 'utils/client'
import useSWR from 'swr'

export default function Home({ data }) {

  return (
    <h1>Acme News</h1>
  )
}

export async function getStaticProps() {

   const config = {
    headers: { 'X-Tenant': 'androidworld.newsifier.com' }
  }
  const data = await client('https://microservice.newsifier.com/api/v1/article/scopes/lat/1/0', config)

  return {
    props: {
      data
    }
  }
}