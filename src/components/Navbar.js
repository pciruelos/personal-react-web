import React, {useState} from "react";
import Logo from "../assets/1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [Navbar, SetNavbar] = useState(false)
    const handleClick = () => SetNavbar(!Navbar);
  return (
    <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#f88379] text-black ">
      
      <div>
        <img src={Logo} alt="Pablo Ciruelos" style={{ width: "100px" }} />
      </div>

      <div className="hidden md:flex">
        <ul className="hidden md:flex font-medium font-sans">
          <li>
          <Link  to="home"  smooth={true} duration={500} >
          Home
        </Link>
          </li>
          <li><Link  to="aboutme"  smooth={true} offset={-50} duration={500} >
          About Me
        </Link></li>
          <li><Link  to="project"  smooth={true} offset={-50} duration={500} >
          Portfolio
        </Link></li>
          <li>Experience y Studies</li>
          <li><Link  to="contact"  smooth={true} offset={50} duration={500} >
          Contact
        </Link></li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!Navbar ? <FaBars/> : <FaTimes/> }
      </div>

      
        <ul className={!Navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f88379] flex flex-col justify-center items-center font-sans font-bold'}>

          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home"  smooth={true} duration={500} >
          Home
        </Link></li>
          <li className="py-6 text-4xl"><Link  onClick={handleClick} to="aboutme"  smooth={true} offset={-50} duration={500} >
          About Me
        </Link></li>
          <li className="py-6 text-4xl"><Link  onClick={handleClick} to="project"  smooth={true} offset={-50} duration={500} >
          Portfolio
        </Link></li>
          <li className="py-6 text-4xl">Experience y Studies</li>
          <li className="py-6 text-4xl"><Link  onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >
          Contact
        </Link></li>
        </ul>
      

    </nav>
  );
};

export default Navbar;
