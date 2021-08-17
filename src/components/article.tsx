import React from 'react'
import Link from 'next/link'

export default function Article({ article }) {
  const { id, title, claps_count, comments_count } = article;
  return (
    <div key={article.id}>
      <h2>
        <Link href={`/article/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </h2>
      <ul>
        <li>{claps_count}👏🏼 </li>
        <li>{comments_count > 0 ? comments_count : 0}💬 </li>
      </ul>
    </div>
  )
}
