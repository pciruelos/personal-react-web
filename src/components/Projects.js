import React from "react";
import Seven from "../assets/8.jpg";
import {projects} from './data'

const Projects = () => {
  return (
    <div
      name="project"
      className="bg-gray-500 w-full md:h-fit text-white font-sans"
      style={{
        backgroundImage: `url(${Seven})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
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
        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* project map */}
          {projects.map(p => (
        <div className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${p.img})` }}>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {p.title}
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/tacho-maps-mern">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href={p.demo}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href={p.github}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
        </div>
    ))}
          {/*End*/}
        </div>
      </div>
      <div className="pb-5">
        <button className="text-white  px-6 py-3 flex items-center mx-auto text-center bg-[#f88379] hover:bg-white hover:text-black"

        // onClick={() => alert('We are sry, production is working on this!')}
        >
         <a href="https://github.com/pciruelos"> More Projects</a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
