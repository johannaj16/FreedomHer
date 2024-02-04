import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function RegisterSubPage({
  setUsername,
  setPassword,
  username,
  password,
  isNotConfirmed,
  confirmPassword,
  setConfirmPassword,
  handleNextStep, // Added this prop
}) {
  return (
    <div className="bg-white w-4/5 max-w-[620px] p-10 rounded-xl">
      <h1 className="font-herfonty text-4xl text-[rgb(214,132,187)] flex justify-center items-center gap-2">
      <CgProfile size={35} /> register here 
      </h1>
      <form className="flex flex-col gap-10 pt-10 font-herfonty">
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-[rgba(82,182,232,0.3)] rounded-lg p-3 outline-none shadow-md text-pink-500"
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`bg-[rgba(82,182,232,0.3)] rounded-lg p-3 outline-none shadow-md text-pink-500 ${
            isNotConfirmed ? "border-2 border-red-500" : ""
          }`}
        />

        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`bg-[rgba(82,182,232,0.3)] rounded-lg p-3 outline-none shadow-md text-pink-500 ${
            isNotConfirmed ? "border-2 border-red-500" : ""
          }`}
        />
        <button
          type="button" // Changed type to "button"
          onClick={handleNextStep} // Added click handler
          className="bg-[rgb(214,132,187)] rounded-lg p-3 text-xl font-bold text-white hover:bg-pink-700"
        >
          Next
        </button>
        <div className="border-b-2"></div>
        <h2 className="flex gap-2 items-center justify-center">
          Already Have an account?
          <Link
            to="/login"
            className="text-lg text-black hover:text-pink-600 hover:underline"
          >
            Login!
          </Link>
        </h2>
      </form>
    </div>
  );
}

export default RegisterSubPage;
