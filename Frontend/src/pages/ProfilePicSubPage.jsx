import React from "react";
import photo1 from "../assets/pfp_1.png";
import photo2 from "../assets/pfp_2.png";
import photo3 from "../assets/pfp_3.png";
import photo4 from "../assets/pfp_4.png";

const photos = [photo1, photo2, photo3, photo4];

function ProfilePicSubPage({
  setProfileImage,
  handleSubmit,
  profileImageOptions,
  handlePreviousStep,
}) {
  return (
    <div className="bg-white w-4/5 max-w-[620px] p-10 rounded-xl">
      <h1 className="font-herfonty text-4xl text-pink-600 uppercase flex justify-center items-center gap-2">
        Select Your Profile Picture
      </h1>

      <form className="flex flex-col gap-10 pt-10 font-herfonty">
        {profileImageOptions.map((option, index) => (
          <div key={index} className="flex items-center gap-4">
            <label className="flex-shrink-0">
              <input
                type="radio"
                name="profilePicture"
                value={option}
                onChange={(e) => setProfileImage(e.target.value)}
              />
              <img
                src={photos[index]}
                alt={`Profile Option ${index + 1}`}
                className="w-12 h-12 rounded-full"
              />
            </label>
            <span>{`Profile Option ${index + 1}`}</span>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreviousStep}
            className="bg-gray-600 rounded-lg p-3 text-xl font-bold text-white hover:bg-gray-700"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-pink-600 rounded-lg p-3 text-xl font-bold text-white hover:bg-pink-700"
          >
            Finish Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePicSubPage;
