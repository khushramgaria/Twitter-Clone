import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegBell, FaRegBookmark } from "react-icons/fa";
import { IoMailOutline, IoPeopleOutline, IoPersonOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import profileimg from "../img/profile.jpg"

function Sidebar() {
    const navigator = [
        { icon: <GoHomeFill/>, name: "Home" },
        { icon: <FaSearch/>, name: "Explore" },
        { icon: <FaRegBell/>, name: "Notifications" },
        { icon: <IoMailOutline/>, name: "Messages" },
        { icon: <LuClipboardList/>, name: "Lists" },
        { icon: <FaRegBookmark/>, name: "Bookmarks" },
        { icon: <IoPeopleOutline/>, name: "Communities" },
        { icon: <FaXTwitter/>, name: "Permium" },
        { icon: <IoPersonOutline/>, name: "Profile" },
        { icon: <CgMoreO/>, name: "More" },
    ]
    return (
    <div className="first w-10 md:w-[70%] ">
        <div className='sticky top-0 pt-1 sm:pr-4'>
        <div className="logo invert my-4 md:pl-8">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="cursor-pointer mx-auto w-7 md:w-6 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className="sidebar justify-center flex md:justify-end">
            <ul className="flex flex-col text-xl md:text-lg space-y-2 md:px-[2.4rem]">
                {navigator.map((navigate) => (
                <li className="md:flex flex justify-center md:justify-start md:gap-3 items-center cursor-pointer md:w-fit hover:bg-[#202327] hover:rounded-xl px-3 py-1">{navigate.icon} <span className='hidden md:block'>{navigate.name}</span></li>
                ))}
                <li>
                    <button className="hidden md:block justify-start items-center cursor-pointer text-blue bg-[#1d9bf0] w-full rounded-3xl py-2 font-bold text-base hover:bg-[#048de8] mt-2 mb-6">Post</button>
                    <CgMoreO className='md:hidden mx-auto bg-[#1d9bf0] text-[31px] p-[5px] mt-2 mb-6 rounded-full' />
                </li>
                <li className='flex justify-between items-center hover:bg-[#202327] hover:rounded-3xl px-2 py-1 my-8'>
                    <div className='flex gap-2'>
                        <div className="img">
                            <img src={profileimg} className="md:w-8 rounded-full" />
                        </div>
                        <div className="content hidden md:block">
                            <p className='text-xs'>Ramgaria</p>
                            <p className='text-xs text-slate-600'>@Ramgaria5</p>
                        </div>
                    </div>
                    <div className='icon hidden md:block'>
                        <CgMoreO />
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar