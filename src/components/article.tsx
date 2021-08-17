import React from 'react'
import Link from 'next/link'

export default function Article({ article }) {
  return (
    <div key={article.id}>
      <h2>
        <Link href={`/article/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </h2>
    </div>
  )
}
