import React from "react";
import Foto from '../assets/2.png'
import Fto1 from '../assets/3.png'
import Fto2 from '../assets/4.png'

import {FaReact,FaNodeJs,FaDocker,FaDigitalOcean,FaAngular} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiExpress,SiTailwindcss} from 'react-icons/si'
import {DiMongodb,DiPostgresql,DiCss3,DiPython} from 'react-icons/di'

const About = () => {
  return (
    <div name='aboutme' className="text-[#f88379] bg-black w-full md:h-screen">
      <p className="text-center px-10 font-bold py-2 font-sans">My History</p>
      <h1 className="text-center px-10 text-4xl pb-8 underline underline-offset-4 text-white font-bold font-sans italic ">About Me</h1>
      <div className='grid gap-4 md:grid-cols-2 pl-10 pr-10 max-w-[1400px] mx-auto'>
        <img src={Foto} alt="Pablo Ciruelos" style={{ width: "500px" }} />
        <div className="flex items-center">
          <div>
          <h1 className="md:text-center text-5xl font-bold pb-5">I'm Pablo Ciruelos</h1>
          <p className="md:text-center text-2xl">
          I am FullStack Developer based in Copenhague, passionate about building web applications. I started my carrer in Argentina and now I am working in Denmark, therefore I have strong communication skills in Spanish and English.
          <br></br><br>
          </br> My strenght is my excellent capability of maintaining code and fixing bugs as well as conducting to final testing. I have five years of practical experience in designing, developing web, OOP, SPA, POS, Ecommerce, CMS and mobile applications. In my spare time I climb, draw and play drums.
          </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl pb-10 pt-10 m-5 underline underline-offset-4 text-white font-bold font-sans italic ">Skills:</h1>
      <div className='grid gap-4 md:grid-cols-2 pl-10 pr-10 items-center text-center font-sans'>
        <div className="max-w-md mx-auto">
        <h1>Main Skills:</h1>
        <img className="hover:scale-125 duration-500" src={Fto1} alt="React next js"/>
        </div>
        <div className="max-w-md mx-auto">
        <h1>Secondary:</h1>
        <img className="hover:scale-125 duration-500" src={Fto2} alt="secondary skills"/>
        </div>
        {/* <div>
        <h1>Others</h1>
        </div> */}
      </div>
    </div>
  );
};

export default About;
