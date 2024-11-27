import { FiInstagram } from "react-icons/fi";
import {BiLogoFacebook} from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-20">
      <footer className=" w-full body-font">
        <div className="h-[82px] flex justify-between items-center max-sm:flex-col max-sm:text-center max-sm:px-4">
          <div className="w-[500px] h-[51px] pl-12 max-sm:w-full max-sm:pl-0">
            <h4 className="font-bold">Subscribe to our newsletter</h4>
            <p className="max-sm:items-center max-sm:pl-12 max-sm:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="max-sm:mt-6">
            <div className="flex max-sm:flex-col">
              <form className="border-black max-sm:w-[380px] border-[1px] rounded-xl w-[265px] p-3 mr-6">
                <input  type=" text" name="email" placeholder="Enter your email"/>
              </form>
              <div><button className="border-black max-sm:mt-5 max-sm:w-[380px] rounded-xl border-[1px] py-3 mr-6 text-black px-6">Subscribe</button></div>
            </div>
            <p className="pt-4  underline">By subscribing you agree to with our Privacy Policy</p>
          </div>

        </div>
  <div className="container px-5 max-sm:mt-[80px] py-24 max-sm:text-center  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap  flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    {/*Image*/}
    <div className="w-64 md:mx-0  max-sm:pl-[36px]  text-center md:text-left">
         <Image className="sm:pl-6" alt="logo" src="/images/Ddsgnr.png" width={130.6} height={40}/>
     </div>
      
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       <p className=" pb-4 text-black font-semibold ">Courses</p>

        <nav className="list-none mb-10 space-y-3">
          <li><a className="text-black hover:text-gray-800">Business</a></li>
          <li><a className="text-black hover:text-gray-800">Development</a></li>
          <li><a className="text-black hover:text-gray-800">Technology</a></li>
          <li><a className="text-black hover:text-gray-800">Design</a></li>
          <li><a className="text-black hover:text-gray-800">Programming</a></li>

        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       <p className=" pb-4 text-black font-semibold ">Resources</p>
       <nav className="list-none mb-10 space-y-3">
          <li><a className="text-black hover:text-gray-800">Career</a></li>
          <li><a className="text-black hover:text-gray-800">Resume</a></li>
          <li><a className="text-black hover:text-gray-800">Learning</a></li>
          <li><a className="text-black hover:text-gray-800">Interview Preparation</a></li>
          <li><a className="text-black hover:text-gray-800">Jobs</a></li>
           </nav>
      </div>  

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       <p id="About"className=" pb-4 text-black font-semibold ">About Us</p>
       <nav className="list-none mb-10  space-y-3">
          <li><a className="text-black hover:text-gray-800">Contact</a></li>
          <li><a className="text-black hover:text-gray-800">Help/Support</a></li>
          <li><a className="text-black hover:text-gray-800">FAQ</a></li>
          <li><a className="text-black hover:text-gray-800"> Terms and Conditions</a></li>
          <li><a className="text-black hover:text-gray-800">Partners</a></li>
           </nav>
      </div> 

    </div>
  </div>
  

  <div className="border-t-[0.5px] border-[#000000] ">
     <div className="items-center  mt-10 mx-10 pb-2 flex flex-col   justify-between sm:flex-row">

       <div className="text-black text-sm text-center sm:text-left mb-4 sm:b-0 sm:text-base">
         2023 Ddsgnr. All right reserved.</div>

         <div className='flex gap-6 text-black sm:text-base mb-4 sm:mb-0'>
           <h3 className='cursor-pointer underline'>Privacy Policy</h3>
           <h3 className='cursor-pointer underline'>Terms of Service</h3>
           <h3 className='cursor-pointer underline'>Cookies Setting</h3>
         </div>
      
        <div className=' flex gap-[16px]'>
           <Link href="/"><BiLogoFacebook className='w-[24px] text-black h-[24px]'/></Link>
          <Link href="/"><FiInstagram className='w-[24px] h-[24px] text-black'/></Link>
           <Link href="/"><FaTwitter className='w-[24px] h-[24px] text-black'/></Link>
           <Link href="/"><FaLinkedin className='w-[45px] h-[24px] text-black' /> </Link>
         </div>
     </div>
   </div>
</footer>

    </div>
  )
}

export default Footer

