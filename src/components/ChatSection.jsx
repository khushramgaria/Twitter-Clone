import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiOutlineGif } from 'react-icons/hi2';
import { FaRegSmile } from 'react-icons/fa';
import { GoFileMedia } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function ChatSection(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state?.data 
  return (
    <>
    {props.chatData || data ? (
        <div className="w-full">
        <div className='flex items-center px-4 py-3 justify-between'>
            <div className="flex items-center gap-3">
                <IoArrowBack className="text-4xl p-2 hover:bg-[#71767b] rounded-full" onClick={() => navigate(-1)} />
                <h1 className='font-base font-bold text-xl'>{props.chatData?.fullName || data?.fullName}</h1>
            </div>
            <div className='flex'>
                <IoMdInformationCircleOutline className='cursor-pointer hover:text-[#1d9bf0] text-xl' />
            </div>
        </div>

        <div className='mx-3 h-[80vh] overflow-y-scroll'>
            <div className='border-b border-[#71767b] text-center justify-center'>
                <img src={props.chatData?.avatar || data?.avatar} className='w-24 h-24 rounded-full text-center justify-center mx-auto' />
                <h1 className='font-bold text-xl'>{props.chatData?.fullName || data?.fullName}</h1>
                <p className='text-sm text-[#71767b] pb-3'>@{props.chatData?.username || data?.username}</p>
                <p className='text-sm pb-3'>{props.chatData?.bio || data?.bio}</p>
                <p className='text-sm text-[#71767b] pb-3'>Joined {props.chatData?.createdAt || data?.createdAt}</p>
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
                    <p className='bg-[#2f3336] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#2f3336] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#2f3336] inline-block text-white rounded-lg py-2 px-4 mb-1'>Need ?</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block justify-end text-end float-right'>
                    <p className='bg-[#1d9bf0] inline-block text-white rounded-lg py-2 px-4 text-end mb-1'>Need drip code</p>
                    <p className='text-[#71767b] text-xs text-end mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#2f3336] inline-block text-white rounded-lg py-2 px-4 mb-1'>Done</p>
                    <p className='text-[#71767b] text-xs mr-1 mb-3'>Mar 22, 2023, 6:31 PM</p>
                </div>
                <div className='mx-2 inline-block float-left'>
                    <p className='bg-[#2f3336] inline-block text-white rounded-lg py-2 px-4 mb-1'>Hello</p>
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
    ) : (
        <p className="flex text-[#71767b] h-screen items-center px-5">Choose from your existing conversations, start a new one, or just keep swimming.</p>
    )}
    </>
  )
}

export default ChatSection