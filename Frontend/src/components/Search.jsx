import React, { useState, useContext } from "react";
import { BsSearchHeart } from "react-icons/bs";
import AddPost from "../components/AddPost";
import LoginOrRegisterModal from "../components/LoginOrRegisterModal"; // Import your login/register modal component
import genre from "./genreTypes.js";
import { useAuth } from "../context/authContext.jsx"; // Adjust the import path as necessary

function Search({ selectedTopic }) {
  const { currentUser } = useAuth();

  const [searchInput, setSearchInput] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchSubmission, setSubmission] = useState("");
  const [currentGenre, setGenre] = useState("All");
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmission(searchInput);
    selectedTopic(currentGenre, searchInput);
  };

  const handleAddPostClick = () => {
    if (currentUser) {
      setIsAddPostModalOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col text-herfonty w-full justify-center text-center items-center gap-3 md:flex-row md:px-10">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-[rgba(82,182,232,0.3)] px-3 py-1 w-4/5 md:w-3/6 border-solid border-2 rounded-xl"
      >
        <input
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent text-herfonty w-full outline-none text-2xl placeholder:text-white py-3"
        />
        <BsSearchHeart color="white" size={30} />
      </form>
      <select className="rounded-xl py-2 px-2 border-solid border-2 border-[#F5E9E9] bg-[rgba(82,182,232,0.3)] w-4/5 md:w-2/6 text-white text-xl md:text-3xl md:py-3">
        {genre.map((item, index) => (
          <option
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              setGenre(item.name);
              selectedTopic(item.name, searchSubmission);
            }}
            className={`${
              index == activeIndex ? "bg-[rgba(132,62,250,0.2)]" : "text-black"
            }  rounded-none`}
          >
            {item.name}
          </option>
        ))}
      </select>
      <div className=" border-b-2 w-4/5  md:border-l-2 md:h-20 md:w-1"></div>
      <button
        className="bg-[rgba(132,62,250,0.3)] transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] font-herfonty transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] text-purple text-3xl font-bold py-3 px-5 w-4/5 md:w-2/6 rounded mx-auto"
        onClick={handleAddPostClick}
      >
        Add Post
      </button>

      {isAddPostModalOpen && (
        <AddPost
          isModalOpen={isAddPostModalOpen}
          setIsModalOpen={setIsAddPostModalOpen}
          closeModal={() => setIsAddPostModalOpen(false)}
        />
      )}

      {isLoginModalOpen && (
        <LoginOrRegisterModal
          isModalOpen={isLoginModalOpen}
          setIsModalOpen={setIsLoginModalOpen}
          closeModal={() => setIsLoginModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Search;
