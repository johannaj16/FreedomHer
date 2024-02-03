import React from "react";
import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
function Search({ selectedTopic }) {
  const genre = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Share Your Story",
    },
    {
      id: 3,
      name: "Safety and Emergency Planning",
    },
    {
      id: 4,
      name: "Recovery and Healing",
    },
    {
      id: 5,
      name: "Education and Awareness",
    },
    {
      id: 6,
      name: "Financial PLanning and Independence",
    },
    {
      id: 7,
      name: "Legal Support",
    },
    {
      id: 8,
      name: "Anonymous Peer Support Groups",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchSubmission, setSubmission] = useState("");
  const [currentGenre, setGenre] = useState("All");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmission(searchInput);
    selectedTopic(currentGenre, searchInput);
  };

  return (
    <div className="flex flex-col w-full justify-center text-center items-center gap-3">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-[rgba(82,182,232,0.3)] px-3 py-1 w-4/5 border-solid border-2 border-[#F5E9E9] rounded-xl"
      >
        <input
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent w-full text-lg outline-none text-white placeholder:text-white py-3"
        />
        <BsSearchHeart color="white" size={30} />
      </form>
      <select className="rounded-xl py-2 px-2 bg-[rgba(82,182,232,0.3)] text-white text-xl">
        {genre.map((item, index) => (
          <option
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
    </div>
  );
}

export default Search;
