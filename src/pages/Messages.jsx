import React from 'react'
import Sidebar from '../components/Sidebar'
import { IoMdSettings } from 'react-icons/io'
import { TbMessage2Plus } from "react-icons/tb";
import img from "../assets/profile.jpg"
import img2 from "../assets/post-1.jpeg"
import { FaSearch } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiOutlineGif } from 'react-icons/hi2';
import { FaRegSmile } from 'react-icons/fa';
import { GoFileMedia } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";

function Messages() {
  return (
    <>
    <Sidebar />

    <div className="second w-[70%] border-r border-[#71767b]">
        <div className='flex items-center px-4 py-3 justify-between'>
            <div>
                <h1 className='font-base font-bold text-xl'>Messages</h1>
            </div>
            <div className='flex gap-3'>
                <IoMdSettings className='cursor-pointer hover:text-[#1d9bf0] text-xl' />
                <TbMessage2Plus className='cursor-pointer hover:text-[#1d9bf0] text-xl' />
            </div>
        </div>

        <div className="search flex items-center gap-4 w-[92%] my-3 mb-5 mx-auto bg-[#202327] py-3 px-3 rounded-full">
            <FaSearch className='text-[#71767b] '/>
            <input type="search" className='bg-transparent border-none outline-none placeholder:text-[#71767b] w-full' placeholder='Search' />
        </div>

        <div>
            <div className='flex items-center gap-2 px-4 py-2 hover:bg-[#858d9552] hover:border-r-2 hover:border-[#1d9bf0]'>
                <div>
                    <img src={img} className='w-9 h-9 rounded-full' />
                </div>
                <div>
                    <p className='text-[#71767b]'><span className='font-bold text-white'>Cathy</span> @cathy . Mar 30, 2023</p>
                    <p className='text-[#71767b]'>Hello</p>
                </div>
            </div>

            <div className='flex items-center gap-2 px-4 py-2 hover:bg-[#858d9552] hover:border-r-2 hover:border-[#1d9bf0]'>
                <div>
                    <img src={img2} className='w-9 h-9 rounded-full' />
                </div>
                <div>
                    <p className='text-[#71767b]'><span className='font-bold text-white'>Jaggi</span> @Jaggi . Aug 07, 2023</p>
                    <p className='text-[#71767b]'>Hello</p>
                </div>
            </div>
        </div>
    </div>

    <div className=' w-full border-r border-[#71767b]'>
        <div className='flex items-center px-4 py-3 justify-between'>
            <div>
                <h1 className='font-base font-bold text-xl'>Cathy</h1>
            </div>
            <div className='flex'>
                <IoMdInformationCircleOutline className='cursor-pointer hover:text-[#1d9bf0] text-xl' />
            </div>
        </div>

        <div className='mx-3 h-[80vh] overflow-y-scroll'>
            <div className='border-b border-[#71767b] text-center justify-center'>
                <img src={img} className='w-24 h-24 rounded-full text-center justify-center mx-auto' />
                <h1 className='font-bold text-xl'>Cathy</h1>
                <p className='text-sm text-[#71767b] pb-3'>@cathy</p>
                <p className='text-sm pb-3'>Here is the bio</p>
                <p className='text-sm text-[#71767b] pb-3'>Joined April 2012 . 11K Followers</p>
            </div>

            <div className='mt-4 flex flex-col'>
                <div className='mx-2 justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 mb-1'>Need ?</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 mb-1'>Hello</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
            </div>
        </div>

        <div className='mx-3'>
            <div className="search flex items-center gap-2 w-full bg-[#202327] py-3 px-3 rounded-2xl mb-3">
                <GoFileMedia className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-1 md:text-3xl text-3xl rounded-full" />
                <HiOutlineGif className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-1 md:text-3xl text-3xl rounded-full" />
                <FaRegSmile className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-1 md:text-3xl text-3xl rounded-full" />
                <input type="search" className='bg-transparent pl-3 border-none outline-none placeholder:text-[#71767b] w-full' placeholder='Search' />
                <LuSendHorizonal className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-1 md:text-3xl text-3xl rounded-full" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Messages