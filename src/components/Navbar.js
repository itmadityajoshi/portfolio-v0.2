import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hadnleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed  z-10 w-full h-[80px] bg-[#2a2b2b] text-gray-400 flex justify-between items-center">
        <div className="flex items-center ">
          <img src="/assets/log.png" className="w-full h-32 -mx-4" alt="" />
        </div>

        {/* menu */}

        <div className="text-xl">
          <ul className="hidden md:flex mx-10">
            <li >
              <Link to="home" smooth={true} duration={500} className="hover:border-b-2 border-red-600 hover:scale-125 ">
                 Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={700} className="hover:border-b-2 border-red-600 hover:scale-125 ">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link to="skills" smooth={true} duration={500} className="hover:border-b-2 border-red-600 hover:scale-125 ">
                Skills
              </Link>
            </li>
            <li>
              {" "}
              <Link to="portfolio" smooth={true} duration={500} className="hover:border-b-2 border-red-600 hover:scale-125 ">
                Portfolio
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contact" smooth={true} duration={500} className="hover:border-b-2 border-red-600 hover:scale-125 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburger */}
        <div onClick={hadnleClick} className=" md:hidden z-10 px-6 text-xl">
          {!nav ? (
            <FaBars className="text-white" />
          ) : (
            <FaTimes className="text-white" />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : " text-white absolute top-0 left-0 w-full h-screen bg-[#27292b] flex  flex-col items-center justify-center"
          }
        >
          <li className="py-6 text-4xl "> <Link onClick={hadnleClick} to="home" smooth={true} duration={500}>
                Home
              </Link> </li>
          <li className="py-6 text-4xl "><Link onClick={hadnleClick}  to="about" smooth={true} duration={700}>
                About
              </Link></li>
          <li className="py-6 text-4xl "> <Link onClick={hadnleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link></li>
          <li className="py-6 text-4xl ">  <Link onClick={hadnleClick} to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link></li>
          <li className="py-6 text-4xl "> <Link onClick={hadnleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link></li>
        </div>

        {/* Social Icons */}

        <div className=" hidden lg:flex flex-col fixed top-64 left-0  text-white">
          <ul>
            <li className="w-[120px] h-[50px] bg-blue-600 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a
                className="flex justify-between  items-center  w-full "
                href="https://www.linkedin.com/in/aditya-joshi316/"
              >
                Linkedin <FaLinkedinIn />{" "}
              </a>
            </li>

            <li className="w-[120px] h-[50px] bg-gray-500 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a
                className="flex justify-between  items-center  w-full "
                href="https://github.com/ma-huu-Aditya"
              >
                Github <FaGithub />{" "}
              </a>
            </li>

            <li className="w-[120px] h-[50px] bg-green-400 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a
                className="flex justify-between  items-center  w-full "
                href="www.gmail.com"
              >
                Mail <CiMail />{" "}
              </a>
            </li>

            <li className="w-[120px] h-[50px] bg-indigo-500 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a
                className="flex justify-between  items-center  w-full "
                href="https://drive.google.com/file/d/1CBJ0HAgMY6e7Qkcsck7JY2YQx0vED2lM/view?usp=share_link"
              >
                Resume <BsPersonLinesFill />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
