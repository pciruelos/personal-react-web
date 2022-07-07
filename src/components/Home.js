import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Fondo from '../assets/6.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-gray-400" style={{ backgroundImage:`url(${Fondo})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black font-bold font-sans">Hi! im</p>
        <h1 className="text-4xl sm:text-10xl font-sans font-bold text-[#f88379]">
          Pablo Ciruelos
        </h1>
        <h2 className="text-2xl sm:text-6xl font-bold">FrontEnd Developer</h2>
        <p className="text-[#f88379] font-sans text-xl italic ">creativity + passion + tech freak</p>
        <div>
          <Link  to="aboutme"  smooth={true} offset={-50} duration={500} >
          <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f88379] hover:border-[#f88379]">
            Go Check!
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-4"/>
            </span>
          </button>
           </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
