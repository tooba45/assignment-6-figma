import Image from 'next/image'
import React from 'react'

const ExploreCourses = () => {
  return (
    <div id="Explore">
        <section className="text-black w-full max-sm:mt-80">
  <div className=" px-6 sm:px-16 pt-16 sm:pt-40 mt-36 mx-auto">
    <div className="flex flex-col text-center mb-20">
      <h1 className="mt-16 sm:text-3xl  text-4xl lg:text-5xl font-bold  mb-4 text-black">
        Explore Courses By Categroy
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
    </div>


    
    <div className="flex justify-center flex-wrap  -m-2">
      {/* Raw 1 */}
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon1.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl  font-semibold">Desihn & Development</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon2.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Marketing</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div> 

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon3.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Development</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>
      

 {/* Raw 2 */}
 <div className="p-2 max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon4.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Communication</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="p-2  max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon5.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Digital Marketing</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div> 

      <div className="p-2 max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon6.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Self Development</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>
      

       {/* Raw 3 */}
 <div className="p-2 max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon7.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Business</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="p-2 max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon8.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Finance</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div> 

      <div className="p-2 max-sm:hidden block lg:w-1/3 md:w-1/2 w-full mb-4">
        <div className=" flex items-center bg-[#F7F7F7]  p-4 ">
          <Image src="/icons/Icon9.png" alt="icon" width={100} height={100}/>
          <div className="pl-6">
            <h3 className="text-black text-xl font-semibold">Consulting</h3>
            <p className="text-black text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>
      
   </div>
    
    
    <div className='mt-16 flex justify-center '>
  <button className='border-[1px] px-6 py-[12px] border-black rounded-xl'>View All Courses</button>
</div>

  </div>
</section>

    </div>
  )
}

export default ExploreCourses
