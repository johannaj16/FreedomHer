import Adam from "../assets/adamProfile.jpg";
import NodeIcon from "../assets/node.jsIcon.png";
import AWSIcon from "../assets/awsIcon.png";
import DockerIcon from "../assets/dockerIcon.png";
import LinkedInIcon from "../assets/linkedInIcon.png";
import Johanna from "../assets/johannaProfile.jpg";
import PythonIcon from "../assets/pythonIcon.png";
import ReactIcon from "../assets/bestReactIcon.png";
import Gabe from "../assets/gabeProfile.jpg";
import MongoIcon from "../assets/mongoIcon.png";
import Aarush from "../assets/aarushBestProfile.jpg";
import SpringBootIcon from "../assets/springBootIcon.png";
function About() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center pt-10 px-14 text-[rgb(55,32,107)]">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-4xl text-center">Our Mission</h1>
        <p className="text-center text-2xl md:w-3/5 ">
          Our mission is to provide a secure and empowering online forum,
          dedicated to fostering open conversations among women. Our platform
          serves as a safe space for discussions on vital topics. We are
          committed to creating a supportive community where women can connect,
          share experiences, and find valuable resources to navigate various
          aspects of their lives. Through inclusivity, compassion, and a
          commitment to anonymity, we strive to empower women in their journey
          towards personal growth, resilience, and collective strength
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-center text-4xl ">Our Developers!</h1>
        <p className="text-center text-2xl md:w-3/5 ">
          Meet our dedicated team of developers, passionate about creating an
          inclusive and secure online space for women to connect, share, and
          support each other on their unique journeys.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/5 place-items-center w-full gap-5 pb-10">
        {/* Adams Profile */}
        <div className="bg-white p-4 w-full max-w-72 rounded-xl shadow-2xl">
          <img src={Adam} className="w-full h-full object-cover rounded-xl" />
          <div className="flex items-center justify-center pt-3">
            <h1 className=" text-xl ">Adam Nguyen</h1>
            <a target="_blank" href="https://www.linkedin.com/in/adamnguyent/">
              <img src={LinkedInIcon} className="h-10 w-10" />
            </a>
          </div>
          <h1 className="text-center text-lg text-pink-400 capitalize">
            Infrastructure
          </h1>
          <div className="flex justify-between items-center pt-4 ">
            <h1 className="text-lg">Tech Stack:</h1>
            <img src={NodeIcon} className="h-10 w-10" />
            <img src={AWSIcon} className="h-10 w-10" />
            <img src={DockerIcon} className="h-10 w-10" />
          </div>
        </div>
        {/* Johanna */}
        <div className="bg-white p-4 w-full max-w-72 rounded-xl shadow-2xl">
          <img
            src={Johanna}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex items-center justify-center pt-3">
            <h1 className=" text-xl ">Johanna Johnsen</h1>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/johanna-johnsen/"
            >
              <img src={LinkedInIcon} className="h-10 w-10" />
            </a>
          </div>
          <h1 className="text-center text-lg text-pink-400 capitalize">
            FrontEnd React Dev
          </h1>
          <div className="flex justify-between items-center pt-4 ">
            <h1 className="text-lg">Tech Stack:</h1>
            <img src={PythonIcon} className="h-10 w-10" />
            <img src={ReactIcon} className="h-10 w-10" />
            <img src={NodeIcon} className="h-10 w-10" />
          </div>
        </div>
        {/* Gabe */}
        <div className="bg-white p-4 w-full max-w-72 rounded-xl shadow-2xl">
          <img src={Gabe} className="w-full h-full object-cover rounded-xl" />
          <div className="flex items-center justify-center pt-3">
            <h1 className=" text-xl ">Gabe Palomino</h1>
            <a target="_blank" href="https://www.linkedin.com/in/gabepalomino/">
              <img src={LinkedInIcon} className="h-10 w-10" />
            </a>
          </div>
          <h1 className="text-center text-lg text-pink-400 capitalize">
            FullStack Engineer
          </h1>
          <div className="flex justify-between items-center pt-4 ">
            <h1 className="text-lg">Tech Stack:</h1>
            <img src={ReactIcon} className="h-10 w-10" />
            <img src={NodeIcon} className="h-10 w-10" />
            <img src={MongoIcon} className="h-10 w-10" />
          </div>
        </div>
        {/* Aarush */}
        <div className="bg-white p-4 w-full max-w-72 rounded-xl shadow-2xl">
          <img src={Aarush} className="w-full h-full object-cover rounded-xl" />
          <div className="flex items-center justify-center pt-3">
            <h1 className=" text-xl ">Aarush Patil</h1>
            <a target="_blank" href="https://www.linkedin.com/in/aarush-patil/">
              <img src={LinkedInIcon} className="h-10 w-10" />
            </a>
          </div>
          <h1 className="text-center text-lg text-pink-400 capitalize">
            BackEnd Engineer
          </h1>
          <div className="flex justify-between items-center pt-4 ">
            <h1 className="text-lg">Tech Stack:</h1>
            <img src={MongoIcon} className="h-10 w-10" />
            <img src={NodeIcon} className="h-10 w-10" />
            <img src={SpringBootIcon} className="h-10 w-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
