import Image from 'next/image'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




const Testimonials = () => {
  return (
    <div id='Testimonial'>
      <section className="bg-[#F7F7F7] W-[1280px]  pt-10 py-14 px-16">
    <div className='flex flex-col '>
    <h2 className="text-4xl w-[560px] h-[58px] max-sm:hidden font-semibold text-black text-start ">
      Customer testimonials</h2>
      <h1 className='sm:hidden font-bold block max-sm:pl-8 text-[32px]'>What Our Student Say</h1>
      <p className='mb-8 w-[560px] h-[27px] max-sm:text-center text-black max-sm:mt-6 max-sm:w-[361px] title-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>


<div className=' flex  mt-12'>
  {/* Card 1 */}
  <div className='border-black border-[1px] w-[362.67px]  pb-5 flex flex-col items-center'>
    <div className='pt-5'>
            <Image src="/stars/Stars.png" alt="star" width={115} height={18}/>
            <div className='pt-4'>
                <p className='w-[298.67px] items-start'> &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis curus viverra ornare. &quot;</p>
      <div className='flex gap-4 mt-6 pb-4'>
           <Image src="/avatars/Avatar Image 1.png" alt="avatars" width={56} height={56}/>
        <div><h4 className='font-semibold'>James Nduku</h4>
          <p>Software Developer</p></div>        
        </div>
      </div>
    </div>
  </div>

{/* Card 2 */}
 <div className='border-black max-sm:hidden ml-7 border-[1px] w-[362.67px]  pb-5 flex flex-col items-center'>
    <div className='pt-5'>
            <Image src="/stars/Stars.png" alt="star" width={115} height={18}/>
            <div className='pt-4'>
                <p className='w-[298.67px] items-start'> &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis curus viverra ornare. &quot;</p>
      <div className='flex mt-6 gap-4 pb-4'>
           <Image src="/avatars/Avatar Image 2.png" alt="avatars" width={56} height={56}/>
        <div><h4 className='font-semibold'>Erick Kipkemboi</h4>
          <p>Scrum Master</p></div>        
        </div>
      </div>
    </div>
  </div>

{/* Card 3 */}
<div className='border-black  max-sm:hidden ml-7 border-[1px] w-[362.67px]  pb-5 flex flex-col items-center'>
    <div className='pt-5'>
            <Image src="/stars/Stars.png" alt="star" width={115} height={18}/>
            <div className='pt-4'>
                <p className='w-[298.67px] items-start'> &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis curus viverra ornare. &quot;</p>
      <div className='flex gap-4 mt-6 pb-4'>
           <Image src="/avatars/Avatar Image 3.png" alt="avatars" width={56} height={56}/>
        <div><h4 className='font-semibold'>Stephen Kerubo</h4>
          <p>UI/UX Designer</p></div>        
        </div>
      </div>
    </div>
  </div>
</div>

<div className='flex justify-between items-center mt-14'>
  <div><Image src="/dots/Dots.png" alt="dots" width={72} height={8}/></div>
  <div className='flex gap-3 pr-14 '>
  <button className='border-black border-[1px] rounded-full p-3'><FaArrowLeft className='w-[24px] h-[24px] ' /></button>
  <button className='border-black border-[1px] rounded-full p-3'><FaArrowRight className='w-[24px] h-[24px] ' /></button>

  </div>
</div>


</section>

    </div>
  )
}

export default Testimonials
