import React from "react";
import "../index.css";
import fairy from "../assets/butterfly.png";
function Posts({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 pt-4 w-full place-items-center">
      {posts.map((item) => (
        <div
          key={item._id}
          className="bg-[rgba(82,182,232,0.3)] flex gap-10 pr-6 pl-4 py-5 w-11/12 drop-shadow-2xl hover:bg-[rgba(50,105,133,0.3)] cursor-pointer"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={fairy}
                className=" w-24 h-24 object-cover rounded-full bg-white"
              />

              <h1 className="font-herfonty text-white text-xl md:text-2xl capitalize line-clamp-2">
                {item.title}
              </h1>
            </div>
            <p className="text-pink-500 capitalize">{item.genre}</p>
            <p className="w-full line-clamp-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
  // imported font
}

export default Posts;
