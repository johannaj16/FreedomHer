import React from "react";

function CommentCreator() {
  const handleSubmit = async (e) => {
    console.log("something");
    e.preventDefault(); //prevent page referesh
  };


  return (
    <>
      <div>
        <form className="flex flex-row md:items-start items-center p-10 text-xl">
          <textarea
            className="bg-gray-100 shadow-lg rounded font-herfonty resize-none w-full h-20 p-3 placeholder-gray-500 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Your reply"
            required
          ></textarea>
          <button
            onSubmit={handleSubmit}
            className="font-herfonty text-lg bg-[rgba(135,116,162,0.4)] transition ease-in-out hover:bg-[rgba(135,116,162,0.85)] py-4 px-3 rounded-lg sm:w-[10rem] mt-4 ml-3"
          >
            Post reply
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentCreator;
