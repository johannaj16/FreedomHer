import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function AddPost({ isModalOpen, setIsModalOpen }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Added for displaying error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message on new submission

        try {
            setIsModalOpen(false)
        } catch (error) {
            console.error(" error:", error);
            setErrorMessage(" failed. Please try again."); // Display this error message to the user
        }
        if (!title) {
            setErrorMessage("Title is required.");
            return;
          }
        if (!genre) {
        setErrorMessage("Genre is required.");
        return;
        }
        if (!description) {
        setErrorMessage("Description is required.");
        return;
        }
    }
  return (
    <div className={`modal ${isModalOpen ? "visible" : "hidden"}`}>
        
      <div className="absolute flex flex-col fixed w-4/5 md:w-3/5 mx-auto pb-8 inset-6 justify-center items-center rounded-3xl bg-[rgba(132,62,250,0.2)] backdrop-blur-lg opacity-98 font-herfonty z-50">
        <button className="text-3xl absolute top-0 right-0 m-4" onClick={() => setIsModalOpen(false)}><IoMdClose/></button>
        <form
          onSubmit={handleSubmit}
          className=""
        >
        <div>

          <div className="text-white w-[43rem] text-2xl m-4">
            Title
          </div>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg p-3"
            required
          />
        </div>

        <div>
          <div className="text-white w-[43rem] text-2xl m-4">
            Genre
          </div>

          <select
    type="text"
  id="genre_type"
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  className="rounded-lg p-3"
  required
>
  <option value="" disabled selected>Select genre</option>
  <option value="option1">Share your Story</option>
  <option value="option2">Safety and Emergency Planning</option>
  <option value="option3">Recovery and Healing</option>
  <option value="option1">Education and Awareness</option>
  <option value="option2">Financial Planning and Independence</option>
  <option value="option3">Legal Support</option>
  <option value="option3">Anonymous Peer Support Groups</option>

  {/* Add more options as needed */}
</select>

        </div>

        <div className="flex flex-col items-center text-white">
          <div
            rows="8"
            className="w-[43rem] m-4 text-2xl"
          >
            Description
          </div>

          <textarea
            
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            rows="6"
            className="rounded-lg w-1/2 p-2.5 text-black"
            placeholder="Description"
            required
          />
        </div>
        <button 
        type="submit"
        className="text-white text-2xl hover:bg-purple-700 mt-8 bg-purple-500 rounded-3xl w-[20rem] mt-4 p-6">Submit Post</button>
      </form>
      </div>
    </div>
  );
}

export default AddPost;
