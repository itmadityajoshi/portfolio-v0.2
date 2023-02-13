import React from "react";

const Skills = () => {
  return (
    <>
      <div name="skills" className="w-full h-screen  text-gray-400 bg-[rgb(42,43,43)]">
        <div className="max-w-[1368px] mx-auto p-4 w-full h-full flex flex-col items-center justify-center ">
          <div className="text-center">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">Experience </p>
            <br/>
           <p className="py-4 ">These are the technologies that i have used in this</p>
            </div>


            <div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-6 text-center py-8 sm:pl-16">
              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/html.png" alt="" />
                <p className="py-4 font-bold text-xl">HTML</p>
              </div>


              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/css.png" alt="" />
                <p className="py-4 font-bold text-xl">CSS</p>
              </div>


              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/javascript.png" alt="" />
                <p className="py-4 font-bold text-xl"  >Javascript</p>
              </div>


              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/react.png" alt="" />
                <p className="py-4 font-bold text-xl">Reactjs</p>
              </div>



              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/tailwind.png" alt="" />
                <p className="py-4 font-bold text-xl">Tailwind css</p>
              </div>


              <div className="shadow-md shadow-black hover:scale-110 duration-500">
                <img  className="w-20 mx-auto mt-4 " src="/assets/github.png" alt="" />
                <p className="py-4 font-bold text-xl">Github</p>
              </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
