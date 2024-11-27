import Image from 'next/image'
import React from 'react'
 


const Hero = () => {
  return (
  <section>
  <div  className='w-full h-[800px] sm:h-[700px] md:h-[800px] top-[141px]'>
    
   <div className=' flex flex-col md:flex-row items-center '>


    <div className='w-full md:w-1/2 mt-20 px-6 md:px-[60px] pb-[180px]  text-start'>
      <h1 className="font-bold   text-4xl sm:text-5xl md:text-6xl lg:w-[700px] mt-5">Learn new skills
        <br/>online with ease
      </h1>

      <p className=' mt-8 sm:w-[100%] md:w-[400px] mb-7 text-[16px] m:text-[18px] leading-relaxed '>
        Discover a wide range of course covering a variety of
        subjects. taught by expert instructors.
      </p>

       <div className="gap-4 flex pt-4">
          <button className="py-3 bg-black text-white px-6 rounded " >Start learning now</button>
          <button className="border-black rounded border-[1px] px-6 py-3">Explore Courses</button>
          </div>
    </div>
        

      <div className="w-full max-sm:hidden md:w-1/2 ">
       <Image
         className=" object-cover object-center  rounded"
         alt="Girl"
         src="/images/girl1.png"
         width={640}
         height={400}
       />
       </div>

        {/* Mobile Size Image */}
        <div className="hidden  max-sm:block max-sm:w-[428px] w-1/2">
    <Image src="/images/Image.png" alt="image 2" width={428} height={390} />
        </div>
  </div>
        <div className="bg-[#F7F7F7] max-sm:ml-4 max-sm:h-auto  max-sm:bg-white  max-sm:w-[428px]  w-[1280px] h-[228px] flex max-sm:flex-col justify-between py-20  ">
      <p className="font-bold  text-2xl max-sm:hidden block ">Trusted by 2000+ companies worldwide.</p>
      <p className="font-bold  max-sm:text-lg hidden max-sm:block max-sm:w-[327px]">Trusted by the world&apos;s best companies [social proof to build credibility]</p>
      <div className=""></div>
       
       
       {/* Logo */}

    <nav className='w-full sm:w-[880px] h-[56px] flex flex-wrap justify-between items-center gap-4 pt-4 sm:pt-24 '> 
      <Image alt="logo1" src="/logo/Logo1.png" width={123.8} height={38.52}/>
      <Image alt="logo2" src="/logo/Logo2.png" width={123.8} height={38.52}/>
      <Image alt="logo3" src="/logo/Logo3.png" width={123.8} height={38.52}/>
      <Image alt="logo4" src="/logo/Logo4.png" width={123.8} height={38.52}/>
      <Image alt="logo5" src="/logo/Logo5.png" width={123.8} height={38.52}/>
      <Image alt="logo6" src="/logo/Logo6.png" width={123.8} height={38.52}/>



    </nav>

  </div>



  </div>

</section>


  )
}

export default Hero

