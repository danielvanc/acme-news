import React from 'react';

export default function Comments({ comments = [] }) {
  if (!comments) return <p>No comments made yet.</p>
  return (
    <div className="comments">
      <h3>Comments:</h3>
      {comments.map(comment => {
        const { content, date, id, username } = comment;
        return (
          <div key={id} className="comment">
            <h4>{username} <em>said</em>:</h4>
            <p>{content}</p>
            <small>{date}</small>
          </div>
        )
      })}
    </div>
  )
}