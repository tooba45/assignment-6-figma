import Image from 'next/image'
import React from 'react'
import { FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";



const Team = () => {
  return (
    <div className='bg-[#F7F7F7] py-28 px-16'>
      <div className="mx-auto">
  <div className="flex flex-col text-center w-full mb-10">
    <h1 className="text-4xl font-semibold  mb-4 text-black">Our team</h1>
    <p className="">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   </p>
  </div>
</div>

 {/* RAW 1 */}
 <div className='flex max-sm:gap-10 max-sm:flex-col max-sm:justify-center max-sm:items-center  mb-16'>
  <div className='w-1/3 max-sm:w-full flex flex-col justify-center items-center'>
  <Image src="/teams/Image1.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-7'>James Nduku</h3>
  <p className='text-lg'>Marketing Coordinator</p>

  <div className='flex  mt-7 gap-4 '>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>
  </div>

  <div className='w-1/3 max-sm:w-full flex flex-col justify-center  items-center'>
  <Image src="/teams/Image2.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-6'>Joseph Munyambu</h3> 
  <p className='text-lg'> Nursing Assistant</p>

  <div className='flex gap-4 mt-7'>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>
  </div>

  <div className='w-1/3 max-sm:w-full flex flex-col justify-center  items-center'>
  <Image src="/teams/Image3.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-6'>Joseph Ngumbua</h3> 
  <p className='text-lg'> Medical Assistant</p>

  <div className='flex gap-4 mt-7'>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>
  </div>
  </div>


{/* RAW 2 */}
<div className='flex mt-12 max-sm:hidden'>
<div className='w-1/3 flex flex-col  items-center'>
  <Image src="/teams/Image4.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-6'>Erick Kipkemboi </h3> 
  <p className=''> Web Designer</p>

  <div className='flex gap-4 mt-7'>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>
  </div>

  <div className='w-1/3 flex flex-col  items-center'>
  <Image src="/teams/Image5.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-6'>Stephen Kerubo  </h3> 
  <p className='text-lg'> President of Sales </p>

  <div className='flex gap-4 mt-7'>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>
  </div>

  <div className='w-1/3 flex flex-col  items-center'>
  <Image src="/teams/Image6.png" alt="boy" width={80} height={80}/>
  <h3 className='font-semibold text-xl mt-6'> John Leboo  </h3> 
  <p className='text-lg'>Dog Trainer </p>

  <div className='flex gap-4 mt-7'>
  <FaLinkedin className='w-[24px] h-[24px]'/>
  <FaTwitter className='w-[24px] h-[24px]'/>
  <FaDribbble className='w-[24px] h-[24px]'/>
  </div>

  
  </div>

 


  </div>

 
  <div className='mt-16 flex justify-center '>
  <button className='border-[1px] px-6 py-[12px]  border-black rounded-xl'>View All</button>
</div>


    </div>
  )
}

export default Team
