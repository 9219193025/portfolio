import React from "react";
import myBackground from "../assets/myBackground.jpg"; // Your image path

const Home = () => {
  return (
    <div className="relative h-screen flex overflow-hidden">
      {/* Left Side: Introduction Section */}
      <div className="w-1/2 bg-gradient-to-b from-gray-900 to-gray-800 p-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
          Hello, I'm KARTIKEY TIWARI!
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Frontend Developer | Creative Thinker | Problem Solver
        </p>
        <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
          Explore My Work
        </button>
      </div>

      {/* Right Side: Profile Image with Social Media Links */}
      <div className="w-1/2 relative">
        {/* Profile Image */}
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${myBackground})`,
            backgroundSize: "cover", // Ensures the image fills the section
            backgroundRepeat: "no-repeat", // Prevent repeating
            backgroundPosition: "center", // Center aligns the image
          }}
        ></div>

        {/* Social Media Links */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full text-white hover:bg-blue-800 transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-900 transition-all duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
