import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-[#2a2b2b]  text-gray-400">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1368px] w-full grid grid-cols-2  gap-3 ">
            <div className="sm:text-right pb-2 pl-14 mb-5  ">
              <p className="font-semibold text-3xl inline border-b-4 border-red-500  ">
                About me
              </p>
            </div>

            <div></div>
          </div>

          <div className="max-w-[1368px] w-full grid sm:grid-cols-2 items-center gap-4 ">
            <div className="sm:text-right mx-auto">
              <img src="/assets/user1.JPG" className="w-56  sm:ml-56 rounded-lg  shadow-xl shadow-black " alt="" />
            </div>

            <div className="pl-10 m-10">
              <p className="px-4 max-w-[400px] ">
                 <p className="font-bold text-2xl ">  
                   Hi, I'm Aditya Joshi.
                  </p>
                <br />I'm a Bsc.CSIT (computer science and Information Technology) Student. Currently, attending MERN course at Dursikshya Training Center.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
