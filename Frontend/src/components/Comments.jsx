import React from "react";

function Comments({ comments }) {
  return (
    <div>
      {comments.map((item, index) => (
        <h1 key={item.id || index}>{item.reply}</h1> // Using item.id as key, fallback to index
      ))}
    </div>
  );
}

export default Comments;
