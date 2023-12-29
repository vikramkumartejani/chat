import { useEffect } from 'react';
import Image from 'next/image'

const StepOne = () => {
  
  return (
    <div className='text-center p-4 flex items-center justify-center w-full md:pt-12 pt-6 pb-12  '>
      <div className='flex flex-col gap-3 justify-between items-center'>
        <div className=' flex md:flex-row flex-col md:gap-6 gap-2 md:items-end items-center '>
          <div>
            <Image
              src="/image4.png"
              width={50}
              height={30}
              alt="image"
              className='mb-3 ml-4 hidden md:flex '
            />
             <Image
              src="/image3.png"
              width={180}
              height={100}
              alt="image"
              className='rounded-2xl md:w-[210px] md:h-[130px] h-[170px] w-[200px] '
            />
           </div>
           <Image
              src="/image4.png"
              width={50}
              height={30}
              alt="image"
              className='md:hidden flex '
            />
          <Image
            src="/image5.png"
            width={150}
            height={100}
            alt="image"
            className='md:w-[130px] md:h-[120px] w-[200px] pb-4  '
          />
        </div>
        <div className='md:flex hidden gap-8'>
          <Image
            src="/image2.png"
            width={130}
            height={100}
            alt="image"
            className='text-right ml-20 '
          />
          <Image
            src="/image1.png"
            width={170}
            height={10}
            alt="image"
            className=' '
          />
        </div>
      </div>
    </div>
  )
}

export default StepOne