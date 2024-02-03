import React from "react";
import sadPenguin from "../assets/sadPenguin.png";
const NoResults = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={sadPenguin} className=" w-96 h-96" />
        <div className=" font-herfonty text-2xl capitalize text-[rgba(132,62,250,0.2)]">
          No Results
        </div>
      </div>
    </>
  );
};

export default NoResults;
