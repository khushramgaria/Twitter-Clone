import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegBell, FaRegBookmark } from "react-icons/fa";
import {
  IoMailOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import profileimg from "../assets/profile.jpg";
import useGetCurrentUser from "../utils/getCurrentUser";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Input from "./Input";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { logoutServer } from "../utils/server";

function Sidebar() {
  const { name, username, avatar } = useGetCurrentUser();
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)
  const navigate = useNavigate()
  const navigator = [
    { icon: <GoHomeFill />, name: "Home", link: "/home"},
    { icon: <FaSearch />, name: "Explore" },
    { icon: <FaRegBell />, name: "Notifications" },
    { icon: <IoMailOutline />, name: "Messages" },
    { icon: <LuClipboardList />, name: "Lists" },
    { icon: <FaRegBookmark />, name: "Bookmarks" },
    { icon: <IoPeopleOutline />, name: "Communities" },
    { icon: <FaXTwitter />, name: "Permium" },
    { icon: <IoPersonOutline />, name: "Profile", link: "/profile" },
    { icon: <CgMoreO />, name: "More" },
  ];

  const logoutHandler = async() => {

    try {
      const response = await axios.post(logoutServer, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })

      console.log(response)
      navigate("/login")

    } catch (error) {
      console.log("Error while logging out !!", error)
    }
  }

  return (
    <div className="first w-10 md:w-[70%] border-r h-screen border-[#71767b] sticky top-0">
      <div className="sticky top-0 pt-1 sm:pr-4">
        <div className="logo invert my-4 md:pl-8">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="cursor-pointer mx-auto w-7 md:w-6 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="sidebar justify-center flex md:justify-end">
          <ul className="flex flex-col text-xl md:text-lg space-y-2 md:px-[2.4rem]">
            {navigator.map((navigate) => (
                <Link to={navigate.link} key={navigate.name}>            
                    <li
                    key={navigate.name}
                    className="md:flex flex justify-center md:justify-start md:gap-3 items-center cursor-pointer md:w-fit hover:bg-[#202327] hover:rounded-xl px-3 py-1"
                    >
                    {navigate.icon}{" "}
                    <span className="hidden md:block">{navigate.name}</span>
                    </li>
                </Link>
            ))}
            <li>
              <label htmlFor="post" className="md:bg-[#1d9bf0] rounded-3xl flex w-full justify-center md:py-2 font-bold text-base md:hover:bg-[#048de8] cursor-pointer mt-2 mb-6" onClick={() => navigate("/tweet")}>
                <span className="hidden md:block">Post</span>
                <BsPencilSquare className="md:hidden mx-auto bg-[#1d9bf0] text-[31px] p-[5px] mt-2 mb-6 rounded-full" />
              </label>
              {/* <Input type="file" id="post" className="hidden" /> */}
            </li>
            <li 
            className="flex gap-2 justify-between items-center hover:bg-[#202327] hover:rounded-3xl px-2 py-1 my-8 cursor-pointer font-bold"
            onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
            >
              <div className="flex gap-2">
                <div className="img">
                  <img src={avatar} className="md:w-8 md:h-8 object-cover rounded-full" />
                </div>
                <div className="content hidden md:block">
                  <p className="text-xs font-bold">{name}</p>
                  <p className="text-xs text-slate-600">@{username}</p>
                </div>
              </div>
              <div className="icon hidden md:block">
                <CgMoreO />
              </div>
              {isVisibleDropdown &&
              <div className="absolute bottom-14 left-32 rounded-xl bg-black border border-[#71767b] py-3 w-[70%] ">
                <p 
                className="py-3 px-6 text-base hover:bg-[#202327] cursor-pointer"
                >
                  Add an existing account
                </p>
                <p 
                className="py-3 px-6 text-base hover:bg-[#202327] cursor-pointer"
                onClick={logoutHandler}
                >
                  Log out @{username}
                </p>
              </div>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
