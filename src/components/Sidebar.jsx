import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegBell, FaRegBookmark } from "react-icons/fa";
import { IoMailOutline, IoPeopleOutline, IoPersonOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

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
    <div className="first w-[70%] ">
        <div className='sticky top-0 pt-1'>
        <div className="logo invert my-4">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="cursor-pointer mx-auto w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className="sidebar flex justify-end">
            <ul className="flex flex-col text-[20px] space-y-3 px-[2.4rem]">
                {navigator.map((navigate) => (
                <li className="flex justify-start gap-3 items-center cursor-pointer w-fit hover:bg-[#202327] hover:rounded-xl px-3 py-1">{navigate.icon} {navigate.name}</li>
                ))}
                <li><button className="justify-start items-center cursor-pointer text-blue bg-[#1d9bf0] w-full rounded-3xl py-2 font-bold text-base hover:bg-[#048de8] mt-2 mb-6">Post</button></li>
                <li className='flex justify-between items-center hover:bg-[#202327] hover:rounded-3xl px-3 py-1 my-8'>
                    <div className='flex gap-2'>
                        <div className="img">
                            <img src="../img/profile.jpg" className="border w-full h-full rounded-full" />
                        </div>
                        <div className="content">
                            <p className='text-xs'>Ramgaria</p>
                            <p className='text-xs text-slate-600'>@Ramgaria5</p>
                        </div>
                    </div>
                    <div className='icon'>
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