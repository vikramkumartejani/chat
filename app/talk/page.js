'use client'
import { useState } from 'react';
 
import ChatReport from '../components/ChatReportDropdown/ChatReport';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";



 
const Talk = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isVoiceOn, setIsVoiceOn] = useState(false);

    const handleButtonClick = () => {
        setIsVoiceOn(!isVoiceOn);
    };
  
    return (
        <div className='bg-bg_color h-[100vh] w-full flex relative'>

            {/* side-bar */}
            <div className='lg:w-[7%] h-full border border-neutral-300 text-center pt-6 px-3 lg:flex hidden flex-col gap-4'>
                <a href='./discover' className='p-1 flex flex-col items-center gap-1 hover:bg-custom_color_200 hover:rounded-xl '>
                    <svg viewBox="0 0 32 32" fill="rgb(107, 98, 85)"
                        class="h-8 w-8"><path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 
                    8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 
                    7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 
                    7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 
                    15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 
                    26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 
                    16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 
                    5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 
                    23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 
                    25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 
                    20.4 9.4 20.4Z"  ></path></svg>
                    <h6 className='text-[12px] text-custom_color'>Discover</h6>
                </a>
                <a href='./discover' className='p-1 flex flex-col items-center gap-1 hover:bg-custom_color_200 hover:rounded-xl'>
                    <svg width="24" height="24" fill="rgb(107, 98, 85)"><path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path></svg>
                    <h6 className='text-[12px] text-custom_color'>Profile</h6>
                </a>
            </div>

            {/* top bar */}
            <div className='px-6 fixed  flex items-center justify-between lg:w-[94%] w-full mt-8 right-0'>
                <button className='lg:invisible flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-custom_color_300 hover:bg-custom_color_300 active:bg-neutral-300-tap'><svg viewBox="0 0 32 32" fill="none" class="h-6 w-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 20.4 9.4 20.4Z" fill="currentColor"></path></svg></button>
                <div>
                    <div className='bg-bg_color_100 rounded-full flex items-center gap-3 p-2 relative'>
                        {/* Voice off */}
                        <div className={`flex items-center gap-3 ${isVoiceOn ? 'hidden' : ''}`}>
                            <button className='relative flex items-center justify-end self-end overflow-hidden' onClick={handleButtonClick}>
                               <HiSpeakerXMark className="text-2xl" />
                            </button>
                            <h4 className='text-xs text-custom_color_900'>Voice off</h4>
                        </div>
                        {/* Voice On */}
                        <div className={`flex items-center gap-3 ${!isVoiceOn ? 'hidden' : ''}`}>
                            <button className='relative flex items-center justify-end self-end overflow-hidden' onClick={handleButtonClick}>
                                <HiMiniSpeakerWave className="text-2xl" />
                            </button>
                            <h4 className='text-xs text-custom_color_900'>Voice on</h4>
                        </div>
                        {/* Dropdown  */}
                        <div >
                            
                             <FaChevronDown onClick={toggleDropdown} className='cursor-pointer'/>

                            {isOpen && (
                                <div className="text-center absolute right-0  pt-1 w-full rounded-md bg-bg_color_100 ">
                                    <div className="py-1">
                                        <h3>Pi 1</h3>
                                        <h3>Pi 2</h3>
                                        <h3>Pi 3</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* center content */}
            <div className='lg:w-[94%] w-full h-[76vh] overflow-y-scroll scrollbar-none mt-8 '>
                <div className='max-w-[650px] w-full m-auto'>
                    <div>
                        <div className='px-8 py-36'>

                            {/* starting text */}
                            <div className='text-xl text-text_color_100 flex flex-col gap-4 text-start'>
                                <h2>Hey there, great to meet you. I’m Pi, your personal AI.</h2>
                                <h2>My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let’s talk about whatever’s on your mind.</h2>
                                <h2>How's your day going?</h2>
                            </div>

                            {/* right side text */}
                            <div className='gap-4 py-10 text-text_color_100'>
                                <h2 className='text-xl  p-3 rounded-lg'>Hi</h2>
                                {/* <ChatReport/> */}
                            </div>

                            {/* left side text */}
                            <div className='flex gap-4 text-start text-text_color_100'>
                                <h2 className='text-xl'>Hi there, User! How's your day going? :)</h2>
                                <ChatReport/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className='text-center lg:w-[94%] w-full flex items-center flex-col fixed bottom-0 right-0'>
                <div className=' max-w-[650px] w-full flex items-center relative'>
                    <button className='absolute left-7 grid h-10 w-12 place-items-center rounded-full bg-bg_color_100  '><svg viewBox="0 0 24 24" fill="none" class="w-6"><path d="M16.6036 7.07374C16.6036 8.22319 17.5465 9.16365 18.6988 9.16365C19.8512 9.16365 20.794 8.22319 20.794 7.07374C20.794 5.92429 19.8512 4.98383 18.6988 4.98383C17.5465 4.98383 16.6036 5.92429 16.6036 7.07374ZM15.7236 19.7386V19.7177C15.7236 19.2788 15.9751 19.0071 16.5617 18.819C17.1484 18.61 17.295 18.4637 17.295 17.6905V13.8659C17.295 13.0927 17.0855 12.9882 16.4989 12.8001C16.017 12.6538 15.7236 12.4239 15.7236 12.0686C15.7236 11.776 15.9122 11.5461 16.1846 11.4417L19.2226 10.3549C19.8931 10.1041 20.4169 10.4385 20.4169 11.0446V17.6905C20.4169 18.4637 20.5636 18.61 21.1502 18.819C21.7369 19.0071 21.9883 19.2788 21.9883 19.7177V19.7386C21.9883 20.1566 21.6531 20.4492 21.1502 20.4492H16.5617C16.0589 20.4492 15.7236 20.1566 15.7236 19.7386ZM7.88754 8.70387C7.88754 6.02879 8.26468 5.15103 9.41705 5.15103C10.8208 5.15103 11.638 6.50947 11.638 8.82927C11.638 11.1491 10.8418 12.5493 9.54276 12.5493C8.24373 12.5493 7.88754 11.5252 7.88754 8.70387ZM2 19.7177V19.7386C2 20.1566 2.33523 20.4492 2.83808 20.4492H9.71038C10.2132 20.4492 10.5485 20.1566 10.5485 19.7386V19.7177C10.5485 19.3206 10.318 19.028 9.73133 18.9026C8.26468 18.5682 8.07611 18.4219 8.07611 17.6069V14.6183C8.07611 14.2421 8.24373 13.9913 8.59991 13.9913C8.9561 13.9913 9.24943 14.1585 9.89894 14.1585C13.2932 14.1585 15.7027 11.9014 15.7027 8.72477C15.7027 5.54811 13.4399 3.5 10.2132 3.5C8.45325 3.5 7.15422 4.14787 5.4571 4.14787H2.83808C2.33523 4.14787 2 4.44046 2 4.85844V4.87934C2 5.31822 2.25143 5.58991 2.83808 5.7362C3.88569 5.98699 4.03235 6.13328 4.03235 6.90655V17.6905C4.03235 18.4637 3.88569 18.61 2.83808 18.8608C2.25143 19.0071 2 19.2788 2 19.7177Z" fill="#0D3C26"></path></svg></button>
                    <input
                        type="text"
                        placeholder="Talk with Pi"
                        className="bg-input_bg py-3 mx-5 text-[1.2rem] pr-12 pl-16 placeholder:text-custom_color_100 rounded-[30px] outline-none w-full cursor-text border border-transparent transition-all duration-300  focus-within:border-custom_color_100 focus-within:shadow-none hover:border-custom_color_100 hover:shadow-none shadow-3xl "
                    />
                    <button className='absolute right-7 flex h-9 w-9 items-center justify-center rounded-full bg-bg_color '><svg width="13" height="16" fill="custom_color_100"><path fill-rule="evenodd" d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clip-rule="evenodd"></path></svg> </button>
                </div>
                <div className='py-6 px-5'>
                    <p className='text-[12px] text-text_color '>By using Pi, you agree to our <a href='#' className=' underline text-underline'>Terms</a> and <a href='#' className=' underline text-underline'> Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    )
}
export default Talk