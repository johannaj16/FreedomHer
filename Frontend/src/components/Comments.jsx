import React from "react";

function Comments({ comments }) {
  return (
    <div>
      {comments.map((item) => (
        <h1>{item.reply}</h1>
      ))}
    </div>
  );
}

export default Comments;
