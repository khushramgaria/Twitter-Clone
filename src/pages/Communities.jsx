import React from 'react'
import Wrapper from '../components/Wrapper'
import { IoArrowBack } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AllTweets from '../components/AllTweets';

function Communities() {
    const navigate = useNavigate()

    return (
    <Wrapper>
        <div className="flex justify-between items-center gap-7 px-5 py-3 border-b border-[#71767b]">
          <div className='flex gap-5'>
            <div>
                <IoArrowBack 
                className="text-3xl hover:text-[#1d9bf0] cursor-pointer hover:bg-[#202327] p-1 hover:rounded-full" 
                onClick={() => navigate("/home")}
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">Communities</h1>
            </div>
          </div>
          <div className='flex gap-3 text-xl'>
            <IoSearch />
            <MdOutlineGroupAdd />
          </div>
        </div>

        <div className='flex mx-auto justify-center my-3 gap-2 overflow-hidden'>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Sports</p>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Technology</p>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Art</p>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Entertainment</p>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Gaming</p>
            <p className='border border-[#71767b] py-1 px-2 rounded-full font-bold cursor-pointer hover:bg-[#202327]'>Politics</p>
        </div>

        <AllTweets />
    </Wrapper>
  )
}

export default Communities