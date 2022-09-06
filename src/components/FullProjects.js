import React from "react";
import { projects } from "./data";
import Navbar from "../components/Navbar";

const FullProjects = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black h-screen">
        <div className="max-w-[1500px] mx-auto p-4 pb-8 flex flex-col w-full pt-20">
          <div className="py-8">
          <h1 className="text-white text-3xl font-medium  italic">
            Here you will find all my recent and most lovely projects
          </h1>
          <h2 className="text-white">
            *if you click on the image you will see more info about the project
          </h2><h2 className="text-white">
            *Use the Tags to filter projects
          </h2>
            </div>          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p) => (
              <div
                className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {p.title}
                  </span>

                  <div className="pt-8 text-center flex justify-around ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FullProjects;
