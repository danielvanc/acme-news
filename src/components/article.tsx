import React from 'react'
import Link from 'next/link'

export default function Article({ article, page }) {
  return (
    <div key={article.id}>
      <h2>
        <Link href={`/article/${article.id}?page=${page}`}>
          <a>{article.title}</a>
        </Link>
      </h2>
    </div>
  )
}
