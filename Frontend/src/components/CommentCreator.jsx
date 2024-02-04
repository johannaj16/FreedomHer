import React from "react";

function CommentCreator() {
  return (
    <>
      <div>
        <div className="px-10 py-10 text-xl">
          <textarea
            class="bg-gray-100 rounded border border-gray-400 font-herfonty leading-normal resize-none w-full h-20 py-3 px-3 placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
          ></textarea>
          <button className="bg-red-600 p-7">add butt</button>
        </div>
      </div>
    </>
  );
}

export default CommentCreator;
