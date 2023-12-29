 import Image from 'next/image';
 import { useEffect } from 'react';

const StepTwo = () => {
  useEffect(() => {
     const images = document.querySelectorAll('.animated-image');
    setTimeout(() => {
      images.forEach((image, index) => {
        image.classList.add('show');
      });
    }, 500);
  }, []);
  return (
    <div className='text-center p-4 relative flex items-center justify-center h-4/6 md:w-1/2 m-auto  '>
      <div className='flex items-center justify-center '>
        <Image
          src="/text.png"
          alt="Description of the image"
          width={100}
          height={300}
        />
      </div>
      <Image src="/pic1.png" alt="Image one" width={120} height={100} className='absolute top-4 right-56 animated-image'/>
      <Image src="/pic2.png" alt="Image one" width={120} height={100} className='absolute top-36 right-24 animated-image'/>
      <Image src="/pic3.png" alt="Image one" width={120} height={100} className='absolute top-32 left-16 animated-image'/>
      <Image src="/pic4.png" alt="Image one" width={120} height={100} className='absolute bottom-10 animated-image'/>
      <Image src="/pic5.png" alt="Image one" width={120} height={100} className='absolute bottom-24 left-28 animated-image'/>
      <Image src="/pic6.png" alt="Image one" width={120} height={100} className='absolute top-10 left-52 animated-image'/>
      <Image src="/pic7.png" alt="Image one" width={120} height={100} className='absolute right-24 bottom-6 animated-image'/>
    </div>
  )
}

export default StepTwo