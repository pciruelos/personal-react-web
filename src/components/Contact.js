import React from 'react'
import {FaGithub,FaLinkedin,FaYoutube,FaBehance,FaEnvelope} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-[500px] bg-black'>
        <p className="text-center px-10 font-bold py-2 text-[#f88379] font-sans">feel free to write me :)</p>
        <h1 className="text-center px-10 text-4xl pb-8 underline underline-offset-4 text-white font-bold font-sans italic ">Conctac Info</h1>
        <div className='pt-5 pb-5'>
            <div className="text-center px-10 text-[#f88379] pt-5 pb-10">
                <h1 className='text-8xl hover:rotate-180 duration-1000'>Ciru</h1>
                <h1 className='text-4xl'>Thats all, thanks for passing by! have a good one!</h1>
            </div>
            {/* Social  */}
            <div className=' flex justify-around text-[#f88379] text-4xl mx-auto md:max-w-[700px] pt-10'>
                <a className='hover:scale-125 duration-900 hover:text-white' href="https://github.com/pciruelos"><FaGithub/></a>
                <a className='hover:scale-125 duration-900 hover:text-white' href="https://www.linkedin.com/in/pablociruelos/"><FaLinkedin/></a>
                <a className='hover:scale-125 duration-900 hover:text-white' href="https://www.youtube.com/c/luppo2007"><FaYoutube/></a>
                <a className='hover:scale-125 duration-900 hover:text-white' href="https://www.behance.net/elchicoprodigio"><FaBehance/></a>
                <a className='hover:scale-125 duration-900 hover:text-white' href="mailto:pciruelos@yahoo.com"><FaEnvelope/></a>
                
            </div>
        </div>
    </div>
  )
}

export default Contact