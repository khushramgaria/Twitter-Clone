import React from 'react'
import Wrapper from '../components/Wrapper'
import { IoHeartSharp } from 'react-icons/io5'
import { FaComment } from "react-icons/fa";
import img from "../assets/profile.jpg"
import img2 from "../assets/post-1.jpeg"

function Notifications() {
  return (
    <Wrapper>
        <h1 className='font-bold text-xl px-4 py-3 font-sans'>Notifications</h1>

        <div className="top-nav flex mt-7 items-center border-b border-[#71767b]">
          <div className="flex w-full justify-around mx-4">
            <h6 className="border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-[10px] md:text-base font-bold">
              All
            </h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">Verified</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">Mentions</h6>
          </div>
        </div>

        <div>
            <div className='border-b border-[#71767b] flex px-5 py-4 cursor-pointer hover:bg-[#202327]'>
                <div className='w-12'>
                    <IoHeartSharp className='text-red-500 text-3xl' />
                </div>
                <div className='w-full'>
                    <img src={img} className='w-9 h-9 rounded-full' />
                    <p className='text-base mt-2'><span className='font-bold'>Cathy</span> liked your post </p>
                </div>
            </div>

            <div className='border-b border-[#71767b] flex px-5 py-4 cursor-pointer hover:bg-[#202327]'>
                <div className='w-12'>
                    <IoHeartSharp className='text-red-500 text-3xl' />
                </div>
                <div className='w-full'>
                    <img src={img2} className='w-9 h-9 rounded-full' />
                    <p className='text-base mt-2'><span className='font-bold'>Jaggi</span> liked your post </p>
                </div>
            </div>

            <div className='border-b border-[#71767b] flex px-5 py-4 cursor-pointer hover:bg-[#202327]'>
                <div className='w-12'>
                    <FaComment className='text-[#71767b] text-2xl' />
                </div>
                <div className='w-full'>
                    <img src={img2} className='w-9 h-9 rounded-full' />
                    <p className='text-base mt-2'><span className='font-bold'>Jaggi</span> commented on your post </p>
                </div>
            </div>
        </div>
        
    </Wrapper>
  )
}

export default Notifications