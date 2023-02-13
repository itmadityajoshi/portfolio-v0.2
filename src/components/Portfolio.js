import React from "react";

const Portfolio = () => {
  return (
    <>
      <div
        name="portfolio"
        className="w-full md:h-screen text-gray-400 bg-[#2a2b2b] "
      >
        <div className="max-w-[1368px] p-4 w-full h-full mx-auto flex flex-col justify-center " >
          <div className=" text-center">
            <p className="text-3xl font-bold border-b-4 border-red-500 inline">
              Portfolio
            </p>
            <p className="text-xl pt-2"> Check out my recent works</p>
          </div>

          <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mx-10">


            <div className="shadowlg shadow-black container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-200">
              <div className="border-2 rounded shadow-lg shadow-black">
                <img src="/assets/movie.png" alt="" />
               
                <div>
                  <a href="">
                    <button></button>
                  </a>

                  <a href="">
                    <button></button>
                  </a>
                </div>
              </div>
            </div>



            <div className="shadowlg shadow-black container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-200">
              <div className="border-2 rounded shadow-lg shadow-black ">
          
                <img src="/assets/simpleui.png" alt="" />           
                <div>
                  <a href="">
                    <button></button>
                  </a>
                
                
                </div>
              </div>
            </div>

            <div className="shadowlg shadow-black container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-200">
              <div className="border-2 rounded shadow-lg shadow-black ">
          
                <img src="/assets/ecomui.png" alt="" />           
                <div>
                  <a href="">
                    <button></button>
                  </a>
                
                
                </div>
              </div>
            </div>


            <div className="shadowlg shadow-black container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-200">
              <div className="border-2 rounded shadow-lg shadow-black ">
          
                <img src="/assets/calc.png" alt="" />           
                <div>
                  <a href="">
                    <button></button>
                  </a>
                
                
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
