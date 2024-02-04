import { BsReply } from "react-icons/bs";
import React from "react";

function Comments({ comments }) {
  // Check if comments exist and is an array
  if (!comments || !Array.isArray(comments)) return null;
  const reversedComments = [...comments].reverse();

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      time: "numeric",
    };
    const formatted = new Date(dateString).toLocaleDateString("en-US", options);
    return formatted;
  };

  return (
    <div className="flex flex-col gap-4 px-10 pb-16 font-herfonty text-[rgb(55,32,107)]">
      <h1 className="text-center text-2xl flex items-center justify-center">
        Replies <BsReply size={35} />
      </h1>
      {reversedComments.map((item, index) => (
        <div className="flex justify-between p-5 bg-[rgba(135,116,162,0.4)] shadow-lg rounded-lg">
          <h1 key={item._id || index} className="text-lg">
            {item.reply}
          </h1>
          <p>{formatDate(item.createdAt)}</p>
        </div> // Using item._id as key, fallback to index
      ))}
    </div>
  );
}

export default Comments;
