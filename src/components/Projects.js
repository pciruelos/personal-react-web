import React from "react";
import Foto5 from "../assets/5.png";
import Seven from "../assets/8.jpg";

const Projects = () => {
  return (
    <div
      name="project"
      className="bg-gray-500 w-full md:h-fit text-white font-sans"
      style={{ backgroundImage: `url(${Seven})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'  }}
    >
      {/* Section title */}
      <div>
        <p className="text-center px-10 font-bold py-2">
          Some previus and present works
        </p>
        <h1 className="italic text-center px-10 text-4xl pb-5 underline underline-offset-4 text-White font-bold ">
          Portfolio Projects
        </h1>
      </div>
      <div className="max-w-[1500px] mx-auto p-4 pb-8 flex flex-col w-full">
        {/* Project Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* container */}
          <div
            style={{ backgroundImage: `url(${Foto5})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN stack App
              </span>

              <div className="pt-8 text-center flex justify-around ">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container */}
          <div
            style={{ backgroundImage: `url(${Foto5})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS App
              </span>

              <div className="pt-8 text-center flex justify-around ">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container */}
          <div
            style={{ backgroundImage: `url(${Foto5})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS App
              </span>

              <div className="pt-8 text-center flex justify-around ">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container */}
          <div
            style={{ backgroundImage: `url(${Foto5})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS App
              </span>

              <div className="pt-8 text-center flex justify-around ">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
      <button className="text-white border-2 px-6 py-3 flex items-center mx-auto text-center bg-[#f88379] hover:border-[#f88379]">
                More Info
      </button>
      </div>
    </div>
  );
};

export default Projects;
