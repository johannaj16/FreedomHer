// import React from "react";

// function Comments({ comments }) {
//   return (
//     <div>
//       {comments.map((item, index) => (
//         <h1 key={item._id || index}>{item.reply}</h1> // Corrected to use item._id as key
//       ))}
//     </div>
//   );
// }

// export default Comments;

import React from "react";

function Comments({ comments }) {
  // Check if comments exist and is an array
  if (!comments || !Array.isArray(comments)) return null;

  return (
    <div>
      {comments.map((item, index) => (
        <h1 key={item._id || index}>{item.reply}</h1> // Using item._id as key, fallback to index
      ))}
    </div>
  );
}

export default Comments;
