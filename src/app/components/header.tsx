"use client";
import Link from 'next/link';
import { FiInstagram } from "react-icons/fi";
import {BiLogoFacebook} from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  return (
   <header>


    <div className='bg-[#F7F7F7] max-sm:hidden max-md:hidden flex justify-between items-center h-[54px] px-[62px] border-b-[0.5px] border-[#000000]'>
      <div className='w-[1154px] h-[54px] py-[12px]  flex  gap-[32px]'>
        <span>Phone Number: 956 345 455</span>
        <span className='w-[149px] h-[21px] border-l-[1px] border-[#676767] pl-4'>Email:info@addsgnr.com</span>
      </div>
        <span className='w-[736px] h-[24px] flex gap-[16px] justify-end '>
          <Link href="/"><BiLogoFacebook className='w-[24px] h-[24px]'/></Link>
          <Link href="/"><FiInstagram className='w-[24px] h-[24px]'/></Link>
          <Link href="/"><FaTwitter className='w-[24px] h-[24px]'/></Link>
          <Link href="/"><FaLinkedin className='w-[45px] h-[24px]' /> </Link>
        </span>
    </div>


    <div className='w-full flex justify-between border-b-[0.5px] border-[#000000] mt-5 items-center h-[72px] bg-[#F7F7F7] px-4 sm:px-16'>
    <div className=' flex justify-between items-center w-[1152px] h-[44px]'>
      

<Image src="/images/Ddsgnr.png" alt="logo" width={130.6} height={30.38}/>

<button className='lg:hidden block'  onClick={() => setIsMenuOpen(!isMenuOpen)}> 
  <Image src="/icons/Menu.png" alt="menu" width={24} height={24}/> </button>


 {/* Mobile Navigation Menu */}
 {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white p-5 z-50">
              <nav className="flex flex-col gap-5 text-center">
                <Link href="/">Home</Link>
                <Link href="#Courses">Courses</Link>
                <Link href="#Service">Services</Link>
                <Link href="#Achievement">Achievement</Link>
                <Link href="#About">About Us</Link>
                <Link href="#Testimonial">Testimonial</Link>
              </nav>
            </div>
          )}

          
     









     <div className='  bg-white max-sm:hidden flex text-base items-center  w-full sm:w-[910px] h-[35px]'>
      <nav className='flex  justify-between items-center w-full  sm:w-[687px] gap-[32px] pl-5 pr-0'>
        <Link href={"/"} className='hover:underline'>Home</Link>
        <Link href="#Courses" className='hover:underline'>Courses</Link>
        <Link href={"#Service"} className='hover:underline'>Services</Link>
        <Link href={"#Achievement"} className='hover:underline'>Achievement</Link>

        <Link href={"#About"} className='hover:underline'>About Us</Link>
        <Link href={"#Testimonial"} className='hover:underline'>Testimonial</Link>
        
        </nav>

       <div className=" w-full sm:w-[191px] h-[40px] gap-[16px] flex justify-between sm:ml-12 sm:flex-row flex-col">
         <button className='text-center text-black border-[2px] ml-12 sm:w-[80px] w-full h-[40px] border-black
         py-2 px-[20px]  rounded'>Login</button>
         
         <button className='text-white  rounded w-full  h-[40px] bg-black py-2 px-[20px] 
         sm:ml-4 border-[1px] mt-2 sm:mt-0'>SignUp</button>
      </div>

      </div>
        
        

      </div>
      </div>
  </header>
  )
}

export default Header
