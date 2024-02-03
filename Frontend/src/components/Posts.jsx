import React from "react";
import "../index.css";
import fairy from "../assets/butterfly.png";
function Posts({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 pt-4 w-full place-items-center">
      {posts.map((item) => (
        <div className="bg-[rgba(82,182,232,0.3)] flex gap-10 px-6 py-5 w-11/12 drop-shadow-2xl hover:bg-[rgba(50,105,133,0.3)] cursor-pointer">
          <img src={fairy} className="w-20 h-20" />
          <div className="flex flex-col">
            <h1 className="font-herfonty text-white text-2xl capitalize">
              {item.title}
            </h1>
            <p className="text-pink-500 capitalize">{item.genre}</p>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
  // imported font
}

export default Posts;
