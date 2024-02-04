import React, { useState } from "react";
import AddPost from "../components/AddPost";
import { Link } from 'react-router-dom'; // or your router library

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Other content... */}

      <div className="text-[rgb(55,32,107)] flex flex-col items-center font-sans font-bold h-screen mx-8">
        <div className="text-purple w-full text-[3.3rem] lg:text-[5.3rem] mt-[5rem] font-herfonty text-center py-20">
          FreedomHER
        </div>
        <div className="w-full text-[2.3rem] font-herfonty text-center -mt-[3rem] mb-[9rem] drop-shadow-[rgba(0,0,0,.55)]">
          an anonymous forum to support domestic violence victims.
        </div>
        <Link
              to="/forum"
              className="bg-[rgba(132,62,250,0.3)] font-herfonty transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] mt-5 my-8 text-purple text-3xl font-bold py-10 px-10 w-[17rem] rounded mx-auto"
              >
              Go to forum
        </Link>

      </div>

      <button
        className="bg-[rgba(132,62,250,0.3)] font-herfonty transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] mt-5 my-8 text-purple text-3xl font-bold py-10 px-10 w-[17rem] rounded mx-auto"
        onClick={() => setIsModalOpen(true)}
      >
        Add Post
      </button>

      {/* {conditional render please <AddPost />} */}
      {isModalOpen && <AddPost isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Home;
