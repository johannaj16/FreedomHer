import React from "react";
import { IoMdClose } from "react-icons/io";

function LoginOrRegisterModal({ isModalOpen, setIsModalOpen }) {
  return (
    <div className={`modal ${isModalOpen ? "visible" : "hidden"}`}>
      <div className="absolute flex flex-col fixed w-4/5 md:w-3/5 mx-auto pb-8 inset-6 justify-center items-center rounded-3xl bg-[rgba(132,62,250,0.2)] backdrop-blur-lg opacity-98 font-herfonty z-50">
        <button
          className="text-3xl absolute top-0 right-0 m-4"
          onClick={() => setIsModalOpen(false)}
        >
          <IoMdClose />
        </button>

        <div className="p-4 text-center text-white">
          <h2 className="text-2xl mb-4">You need to be logged in</h2>
          <p className="mb-4">
            To add a post, please log in or register an account.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded">
            Login
          </button>
          <span className="mx-2">or</span>
          <button className="bg-white text-black py-2 px-4 rounded">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginOrRegisterModal;
