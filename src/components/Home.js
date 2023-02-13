import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="  h-screen bg-[#2a2b2b] text-gray-400">
        {/* container */}
        <div className="max-w-[1000px] w-full  mx-auto text-white px-10 flex flex-col justify-center  h-full">
          <h1 className="text-4xl font-bold sm:text-4xl">I'M ADITYA JOSHI</h1>
          <p className="text-xl py-2 sm:text-3xl">WEB DEVELOPER.</p>
          <p className=" text-l sm:text-xl  max-w-[800px] py-3">
            I'm learning Web Development specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive MERN web applications.
          </p>

          <div className=" py-4">
            <button className="group flex items-center border-2 h-12 px-2 hover:bg-red-600 hover:border-red-600 hover:text-black font-semibold">
              <Link to="portfolio" smooth={true} duration={500}>
              View Work </Link>
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="ml-2 text-lg" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
