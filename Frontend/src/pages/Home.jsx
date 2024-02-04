import React, { useState } from "react";
import AddPost from "../components/AddPost";
import { Link } from "react-router-dom"; // or your router library
import "../styles/heart.css";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Other content... */}

      <div className="text-[rgb(55,32,107)] flex flex-col items-center font-sans font-bold h-screen mx-8">
        <div className=" flex justify-center gap-4 items-center text-purple w-full text-[3.3rem] lg:text-[5.3rem] mt-[2rem] font-herfonty text-center py-20">
          FreedomHER
          <div className="icon">
            <svg
              className="heart-main"
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
            <svg
              class="heart-background"
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </div>
        </div>
        <div className="w-full text-[2.3rem] font-herfonty text-center -mt-[3rem]  drop-shadow-[rgba(0,0,0,.55)]">
          an anonymous forum to support domestic violence victims.
        </div>
        <Link
          to="/forum"
          className="bg-[rgba(132,62,250,0.3)] font-herfonty transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] my-8 text-purple text-3xl font-bold py-10 px-10 w-[17rem] rounded mx-auto"
        >
          Go to forum
        </Link>
      </div>

      {/* {conditional render please <AddPost />} */}
      {isModalOpen && (
        <AddPost
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Home;
