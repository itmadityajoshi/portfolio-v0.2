import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <>
    
      <footer name="contact" className="footer p-10   bg-[#2a2b2b] text-gray-400">
        <div className=" pl-10">
          <p className="font-bold text-3xl ">
            <span className="border-b-4 border-red-500">Get </span> In Touch{" "}
          </p>
          <div className="text-base mt-2">
            <p>Sipadol-08, Suryabinayak, Bhaktapur</p>
            <p>Nepal</p>
            <p>adityajoshi316@gmail.com</p>
            <p>+977 9860709627</p>
            <p className="flex gap-4  cursor-pointer ">
              {" "}
              Share : <a href="https://github.com/ma-huu-Aditya"><BsGithub /></a> <a href="https://www.linkedin.com/in/aditya-joshi316/"><BsLinkedin /></a> <BsFacebook /> <BsTwitter />  {" "}
            </p>
          </div>
        </div>

        <div className=" sm:m-10">

         <p className="text-2xl font-bold">  Let's  <span className=" text-red-500 text-3xl"> Collaborate</span> </p>
          <form
            action="https://getform.io/f/13bdcaea-28ae-466b-b772-6ffac7953bab"
            method="post"
          cla >
            <div className="form-control w-80 bg-[#2a2b2b] border-none ">
              <div className="form-control w-full max-w-xs border-none bg-[#2a2b2b]">
                <input
                  name="name"
                  type="text"
                  placeholder="Name here*"
                  className="input input-bordered w-full max-w-xs border-none"
                />

                <input
                  name="email"
                  type="text"
                  placeholder="Email here*"
                  className="input w-full  border-none my-4"
                />

                <textarea
                  name="message"
                  className="textarea"
                  placeholder="message here"
                ></textarea>
              </div>

              <div className="flex items-center justify-center py-2">
                <button className="btn   btn-primary w-[100px] ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Contact;
