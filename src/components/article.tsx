import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Article({ article }) {
  const { id, title, claps_count, comments_count, image } = article;
  return (
    <article className="article" key={article.id}>
      <div className="image">
        <Image src={image} alt={title} width="200" height="120" />
      </div>
      <div className="article-content">
        <header>
          <h2>
            <Link href={`/article/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </h2>
        </header>
        <footer>
          <ul>
            <li>👏🏼 {claps_count} </li>
            <li>💬 {comments_count > 0 ? comments_count : 0} </li>
          </ul>
        </footer>
      </div>
    </article>
  )
}
