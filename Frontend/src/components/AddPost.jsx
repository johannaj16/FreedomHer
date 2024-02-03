import React, { useState } from "react";
function AddPost({ isModalOpen, setIsModalOpen }) {
  return (
    <div className={`modal ${isModalOpen ? "visible" : "hidden"}`}>
      <div className="flex flex-col gap-6 rows=6 m-[7rem] mb-6 md:grid-cols-2 text-white items-center fixed inset-12 rounded-3xl bg-[rgba(132,62,250,0.2)] backdrop-blur-lg opacity-98 font-herfonty">
        <button onClick={() => setIsModalOpen(false)}>Close</button>

        <div>
          <div className="w-[43rem] block mb-2 text-lg font-medium text-gray-900 dark:text-white text-white">
            Title
          </div>

          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jojo"
            required
          />
        </div>

        <div>
          <div
            rows="8"
            className="w-[43rem] block mb-2 rows-6 text-lg font-medium text-gray-900 dark:text-white text-white"
          >
            Description
          </div>

          <textarea
            type="text"
            id="first_name"
            rows="6"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jojo"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AddPost;
