import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Premium() {
  const navigate = useNavigate()
  return (
    <>
    <div className='mt-4 text-4xl'>
      <RxCross2 className='p-2 hover:bg-[#71767b] rounded-full cursor-pointer' onClick={() => navigate(-1)} />
    </div>
    <div className='flex-col justify-center mx-auto mt-8'>
      <div>
        <h1 className='text-center font-bold text-5xl md:text-7xl mt-10 mb-10'>Upgrade to Premium</h1>
        <p className='text-xl text-[#71767b] text-center'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</p>
        <p className='text-center text-lg text-[#71767b]'>(For organizations, <span className='font-bold underline text-white'>sign up here</span>)</p>
      </div>

      <div className="flex justify-center mt-8 cursor-pointer">
        <div className="relative bg-[#202327] py-[2px] px-1 text-sm flex font-bold gap-3 rounded-full items-center">
          <p className="text-center bg-black rounded-full px-2 py-2 items-center">Annual <span className="text-white bg-[#00251a] text-xs rounded-full px-2">Best Value</span></p>
          <p className="text-white pr-3">Monthly</p>
        </div>
      </div>


      <div className='flex flex-col md:flex-row gap-8 mt-5 my-10'>
        <div className='bg-[#202327] h-[70vh] py-4 w-[330px] pl-6 pr-10 rounded-2xl'>
          <h5 className='text-2xl'>Basic</h5>
          <div className='flex items-baseline'>
            <h1 className='font-bold text-4xl'>₹215.87</h1>
            <small className='text-lg'>/ month</small>
          </div>
          <div className='flex py-2 items-center gap-3'>
            <p className=''>Billed annually</p>
            <small className='bg-[#00251a] px-2 py-[2px] rounded-full font-bold text-xs'>SAVE 11%</small>
          </div>
          <button className='bg-white text-black font-bold text-lg px-10 py-1 my-3 w-full rounded-full'>Subscribe</button>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Small reply boost</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Encrypted direct messages</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Bookmark folders</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Highlights tab</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Edit post</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Post longer videos</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Longer posts</p>
          </div>
        </div>
        <div className='bg-[#202327] h-[70vh] py-4 w-[330px] pl-6 pr-10 rounded-2xl'>
          <h5 className='text-2xl'>Premium</h5>
          <div className='flex items-baseline'>
            <h1 className='font-bold text-4xl'>₹566.67</h1>
            <small className='text-lg'>/ month</small>
          </div>
          <div className='flex py-2 items-center gap-3'>
            <p className=''>Billed annually</p>
            <small className='bg-[#00251a] px-2 py-[2px] rounded-full font-bold text-xs'>SAVE 12%</small>
          </div>
          <button className='bg-white text-black font-bold text-lg px-10 py-1 my-3 w-full rounded-full'>Subscribe</button>
          <div>
            <p className='font-bold'>Everything in Basic, and</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Half Ads in For You and Following</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Larger reply boost</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Get paid to post</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Checkmark</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Grok Early Access</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>X Pro, Analytics, Media Studio</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Creator Subscriptions</p>
          </div>
        </div>
        <div className='bg-[#1d9bf0] h-[70vh] py-4 w-[330px] pl-6 pr-10 rounded-2xl'>
          <h5 className='text-2xl'>Premium+</h5>
          <div className='flex items-baseline'>
            <h1 className='font-bold text-4xl'>₹1,133.33</h1>
            <small className='text-lg'>/ month</small>
          </div>
          <div className='flex py-2 items-center gap-3'>
            <p className=''>Billed annually</p>
            <small className='text-[#00251a] bg-white px-2 py-[2px] rounded-full font-bold text-xs'>SAVE 12%</small>
          </div>
          <button className='bg-white text-black font-bold text-lg px-10 py-1 w-full my-3 rounded-full'>Subscribe</button>
          <div>
            <p className='font-bold'>Everything in Premium, and</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>No Ads in For You and Following</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Largest reply boost</p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <IoMdCheckmark />
            <p>Write Articles</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Premium