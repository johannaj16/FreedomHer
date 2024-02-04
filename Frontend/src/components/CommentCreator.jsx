import React from "react";

function CommentCreator() {
  return (
    <>
      <div>
        <div className="flex flex-col md:items-start items-center p-10 text-xl">
          <textarea
            class="bg-gray-100 shadow-lg rounded font-herfonty resize-none w-full h-20 p-3 placeholder-gray-500 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Your reply"
            required
          ></textarea>
          <button className="font-herfonty text-lg bg-[rgba(135,116,162,0.4)] transition ease-in-out hover:bg-[rgba(135,116,162,0.85)] py-4 px-3 rounded-lg sm:w-[10rem] mt-4 ml-3">Post reply</button>
        </div>
      </div>
    </>
  );
}

export default CommentCreator;
