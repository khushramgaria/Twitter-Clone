import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { TbMessage2Plus } from "react-icons/tb";
import { FaSearch } from 'react-icons/fa';
import useGetCurrentUser from '../utils/getCurrentUser';

function Chats(props) {
    const { followingUserDetails } = useGetCurrentUser()
    console.log(followingUserDetails)

    const dataHandler = (_id) => {
        console.log(_id)
        followingUserDetails.map((user) => {
            user._id === _id ? 
            props.data(user) : ""
        })
    }
  return (
    <>
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
            {Array.isArray(followingUserDetails) && followingUserDetails.length > 0 ? 
                followingUserDetails.map((user) => (
                    <div 
                    key={user._id} 
                    className='flex items-center gap-2 px-4 py-2 hover:bg-[#858d9552] hover:border-r-2 hover:border-[#1d9bf0] cursor-pointer'
                    onClick={() => dataHandler(user._id)}
                    >
                        <div>
                            <img src={user.avatar} className='w-9 h-9 rounded-full' />
                        </div>
                        <div>
                            <p className='text-[#71767b]'><span className='font-bold text-white'>{user.fullName}</span> @{user.username}</p>
                            <p className='text-[#71767b]'>Hello</p>
                        </div>
                    </div>
                )) : (
                    <p>No user found</p>
                )
            }
        </div>
    </>
  )
}

export default Chats