import { useState } from "react";
import { CgProfile } from "react-icons/cg"; // Import the icon to match the Login page
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import RegisterSubPage from "./RegistrationSubPage";
import ProfilePicPage from "./ProfilePicSubPage";
// Register
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNotConfirmed, setIsNotConfirmed] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [registrationStep, setRegistrationStep] = useState(1);
  const [profileImage, setProfileImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    //
    if (username.length === 0) {
      return;
    }

    if (!profileImage) {
      return;
    }
    // Check if passwords match
    const passwordsMatch = password === confirmPassword;

    // Update the confirmation state based on the match
    setIsNotConfirmed(!passwordsMatch);

    if (!passwordsMatch) {
      return;
    }

    try {
      //register
      await register(profileImage, username, password);

      //GO home baby
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle errors (like showing a message to the user)
    }
  };

  const renderStep = () => {
    switch (registrationStep) {
      case 1:
        return (
          <RegisterSubPage
            setUsername={setUsername}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setRegistrationStep={setRegistrationStep}
          />
        );
      case 2:
        return (
          <ChooseProfileSubPage
            setProfileImage={setProfileImage}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <main className="flex justify-center items-center py-40">
      {renderStep()}
    </main>
  );
}

export default Register;
