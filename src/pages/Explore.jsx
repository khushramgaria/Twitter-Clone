import React from 'react'
import Wrapper from '../components/Wrapper'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { CgMoreO } from 'react-icons/cg'

function Explore() {
  return (
    <Wrapper>
        <div className='flex w-full items-center justify-center'>
            <div className="search flex items-center gap-4 m-2 w-full ml-5 bg-[#202327] py-3 px-3 rounded-full">
                <FaSearch className='text-[#71767b] '/>
                <input type="search" className='bg-transparent  border-none outline-none placeholder:text-[#71767b] w-full' placeholder='Search' />
            </div>
            <div className='w-12'>
                <IoMdSettings className="cursor-pointer p-1 text-2xl text-white hover:bg-[#1d9cf020] rounded-full" />
            </div>
        </div>

        <div className="top-nav flex mt-7 items-center border-b border-[#71767b]">
          <div className="flex w-full justify-around mx-4">
            <h6 className="border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-[10px] md:text-base font-bold">
              For you
            </h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">Trending</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">
              News
            </h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">Sports</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-base">Entertainment</h6>
          </div>
        </div>

        <div>
            <div className='flex justify-between px-6 py-2 cursor-pointer hover:bg-[#202327]'>
                <div>
                    <small className='text-[#71767b]'>Trending in India</small>
                    <h5 className='font-bold text-base'>#TriggeredInsan</h5>
                    <small className='text-[#71767b]'>4,117 posts</small>
                </div>
                <div className='pt-4'>
                    <CgMoreO/>
                </div>
            </div>
            <div className='flex justify-between px-6 py-2 cursor-pointer hover:bg-[#202327]'>
                <div>
                    <small className='text-[#71767b]'>Trending in India</small>
                    <h5 className='font-bold text-base'>Rs 2,000</h5>
                    <small className='text-[#71767b]'>1,497 posts</small>
                </div>
                <div className='pt-4'>
                    <CgMoreO/>
                </div>
            </div>
            <div className='flex justify-between px-6 py-2 cursor-pointer hover:bg-[#202327]'>
                <div>
                    <small className='text-[#71767b]'>Trending in India</small>
                    <h5 className='font-bold text-base'>#blockbuster</h5>
                    <small className='text-[#71767b]'>8,901 posts</small>
                </div>
                <div className='pt-4'>
                    <CgMoreO/>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Explore