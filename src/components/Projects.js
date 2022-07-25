import React from "react";
import F3 from "../assets/old.png";
import F6 from "../assets/6.png";
import Seven from "../assets/8.jpg";
import F10 from "../assets/10.png";
import F12 from "../assets/12.png";
import F17 from "../assets/17.png";
import F15 from "../assets/15.png";
import Next from "../assets/Next.png";

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
        {/* Project Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* container 1*/}
          <div
            style={{ backgroundImage: `url(${F6})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN stack App
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/MERN-img">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://ciru-mern-img-web.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/MERN-img">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container 2*/}
          <div
            style={{ backgroundImage: `url(${F10})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Redux Toolkit App Example
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://redux-toolkit-app-ciru.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://redux-toolkit-app-ciru.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/redux-toolkit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container3 */}
          <div
            style={{ backgroundImage: `url(${F15})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN app 'Img Uploader'
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/MERN-img">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://ciru-mern-img-web.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/MERN-img">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container4*/}
          <div
            style={{ backgroundImage: `url(${Next})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next Personal Old Web
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/next-personal-web">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://ciruelos-next-web.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/next-personal-web">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container5 */}
          <div
            style={{ backgroundImage: `url(${F17})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Personal Blog with NEXTjs
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/personal-next-blog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://personal-next-blog-pi.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/personal-next-blog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container6 */}
          <div
            style={{ backgroundImage: `url(${F12})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rick and Morty API
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/react-rick-and-morty-API">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://react-rick-and-morty-api-pied.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/react-rick-and-morty-API">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container7 */}
          <div
            style={{ backgroundImage: `url(${F3})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Old Website
              </span>

              <div className="pt-8 text-center flex justify-around ">
                  {/*
                <a href="https://github.com/pciruelos/cirureact">
                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button> 
                </a>
                  */}
                <a href="https://ciru.website/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/cirureact">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* container 8*/}
          <div
            style={{ backgroundImage: `url(${Next})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next Personal Old Web
              </span>

              <div className="pt-8 text-center flex justify-around ">
                {/* <a href="https://github.com/pciruelos/next-personal-web">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Info
                  </button>
                </a> */}
                <a href="https://ciruelos-next-web.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pciruelos/next-personal-web">
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
