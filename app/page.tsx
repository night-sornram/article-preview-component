"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [show,setShow] = useState(false);

  return (
    <div className=' w-screen h-screen  flex justify-center items-center'>
      <div className=' flex flex-col sm:flex-row bg-white w-11/12 sm:w-11/12 md:w-4/5 lg:3/4 xl:w-2/3 rounded-lg relative'>
        <Image
        src={"/images/drawers.jpg"}
        width={600}
        height={600}
        alt='drawer'
        className=' rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg object-contain'/>
        <div className=' flex flex-col mx-8 lg:mx-12 xl:mx-16 relative'>
          <div className='text-3xl sm:text-lg lg:text-2xl xl:text-3xl text-custom-100 font-medium mt-14 sm:mt-6 lg:mt-8 xl:mt-8'>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </div>
          <div className=' text-lg sm:text-xs md:text-sm lg:text-base xl:text-lg text-custom-200 mt-5'>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete. 
          </div>
          <div className=' flex flex-row justify-between mt-10 sm:mt-8 mb-8 sm:mb-0'>
            <div className='flex flex-row '>
              <Image
              src={"/images/avatar-michelle.jpg"}
              width={50}
              height={50}
              className=' rounded-full text-base sm:w-8 md:w-14 sm:h-8 md:h-14 '
              alt='profile'/>
              <div className=' flex flex-col justify-center ml-4'>
                <div className='text-base sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium text-custom-100'>
                  Michelle Appleton
                </div>
                <div className='text-base sm:text-xs md:text-sm lg:text-base xl:text-lg text-custom-200'>
                  28 Jun 2020
                </div>
              </div>
            </div>
            <button onClick={()=>{setShow(!show)}} className='flex justify-center items-center'>
              <div className={show === false ? "s" : "u"}>

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={show === false ? "#6E8098" : "#FFFFFF"} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
              </div>
            </button>
            
          </div>
          {show && (
            <div className=' flex flex-row p-5 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 justify-around items-center mx-0 rounded-lg bg-custom-100 absolute sm:bottom-2/4 sm:-right-14 md:-right-20 lg:-right-28 bottom-0 right-0'>
              <div className=' text-custom-300 text-lg'>SHARE</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" className=' cursor-pointer'><path fill="#FFF" d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.605.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className=' cursor-pointer'><path fill="#FFF" d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className=' cursor-pointer'><path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              <button onClick={()=>{setShow(!show)}} className='flex justify-center items-center sm:hidden'>
              <div className= "u">

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill= "#FFFFFF" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
              </div>
            </button>
            </div>

          )}
          {/* {show && (
            <div className=' flex flex-row p-5 w-full sm:w-1/4 justify-around items-center rounded-lg bg-custom-100 absolute sm:bottom-2/4 sm:-right-14 bottom-0 left-0'>
              <div className=' text-custom-300 text-lg'>SHARE</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#FFF" d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.605.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              
            </div>

          )} */}

        </div>
      </div>
    </div>
  )}