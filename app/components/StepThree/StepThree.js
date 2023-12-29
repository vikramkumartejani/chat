import React from 'react'
  
const StepThree = () => {
 
  return (
    <div className='w-full h-screen bg-bg_color relative'>
       {/* content */}
      <div className='text-center flex items-center justify-center h-5/6 flex-col '>
        <h2 className='text-green text-5xl md:pb-10 pb-4 '>Start talking to Pi</h2>
        <p className='text-text_color md:text-xl text-lg px-2 pb-10 md:px-0 w-full max-w-[520px] '>The more we get to know each other, the more I can personally assist you.</p>
      </div>
      {/* bottom bar */}
      <div className='w-full flex flex-col items-center gap-3 md:py-10 py-4 text-center absolute bottom-0 mb-8 '>
        <button className='rounded-full bg-green hover:bg-custom_color_400 font-medium text-bg_color max-w-[400px] w-full p-3.5 text-[18px]'>Talk to Pi</button>
        <button className='rounded-full text-green_100 border border-custom_color_500 font-medium  max-w-[400px] w-full p-3.5 text-[18px]'>Sign Up</button>
      </div>
    </div>
  )
}

export default StepThree