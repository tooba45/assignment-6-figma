import Image from 'next/image'
import React from 'react'
import { IoIosStar } from 'react-icons/io'

const Courses = () => {
  return (
    <div id="Courses">
      <div className='w-[1280px] max-sm:h-[2135px] max-sm:w-[428px] h-[1742px] py-28'>
            <div className='text-center'>
            <h2 className='font-bold  max-sm:text-[32px] pb-6 text-[56px]'>Courses</h2>
            <p className='text-lg'>Your Ultimate Guide to learning</p>
            </div>

          <div className='h-[1340px] pt-12'>
            <div className='text-center'>
                <button className='py-2 px-4 border-b-[1px] border-[#676767]'>Popular</button>
                <button className='py-2 px-4'>Recommended</button>
                <button className='py-2 px-4'>Best Price</button>
            </div>

   {/* RAW 1 */}
   <div className='flex max-sm:flex-wrap gap-[24px] pt-12'>
    
    <div className='bg-[#F7F7F7] w-[416px] h-[534px]'>
        <Image src="/courses/Image1.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Design</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>UI/UX Design 201</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>

    <div className='bg-[#F7F7F7]  w-[416px] h-[534px]'>
        <Image src="/courses/Image2.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Programming</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Introduction to Python</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>

    <div className='bg-[#F7F7F7] w-[416px] h-[534px]'>
        <Image src="/courses/Image3.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Business</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Data Analysis for Beginners</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>
    </div>
    {/* Raw 2 */}
    <div className='flex max-sm:hidden gap-[24px] pt-12'>
    
    <div className='bg-[#F7F7F7] w-[416px] h-[534px]'>
        <Image src="/courses/Image4.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Art</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Art Specialization</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>

    <div className='bg-[#F7F7F7] flex flex-wrap w-[416px] h-[534px]'>
        <Image src="/courses/Image5.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Law</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Rule of Law</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>

    <div className='bg-[#F7F7F7] w-[416px] h-[534px]'>
        <Image src="/courses/Image6.png" alt="image1" width={416} height={300}/>
        <div className='px-4 flex flex-col gap-2 pb-2'>
            <div className='flex justify-between mt-4 bg-[#F7F7F7]'>
                <p className='font-semibold'>Tech</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center'>
                <IoIosStar className='text-[#D9D9D9] w-[20px] h-[20px]'/>
                <div className='text-sm font-semibold '>5.0</div>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Introduction to webflow</h1>
            <p className='w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
        </div>

        <div className='pt-2 pb-5 px-5'>
            <button className='border-black border-[1px] rounded-xl py-2 px-5'>Enroll Now</button>
            <button className='px-5 py-2 pl-6'>$400</button>
        </div>
    </div>
    </div>

    
    <div className='text-center max-sm:pr-11 pt-12'>
          <button className='py-2 px-4 border-black border-[1px] rounded'>View All Courses</button>
        </div>


          </div>  

      </div>
    </div>
  )
}

export default Courses
