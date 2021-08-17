import React from 'react';

export default function Comments({ comments = [] }) {
  if (!comments) return <p>No comments made yet.</p>
  return (
    <div>
      {comments.map(comment => {
        const { content, date, id, username } = comment;
        return (
          <div key={id}>
            {username}
            <p>{content}</p>
            <p>{date}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}