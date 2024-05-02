import React from 'react'
import { CgMoreO } from "react-icons/cg";
import profileimg from "../img/profile.jpg"
import { IoMdSettings } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { HiOutlineGif } from "react-icons/hi2";
import { RiListRadio, RiCalendarScheduleLine, RiShare2Line } from "react-icons/ri";
import { FaRegSmile, FaRegComment } from "react-icons/fa";
import { CiLocationOn, CiHeart, CiBookmark } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import { CgInsights } from "react-icons/cg";
import post1 from "../img/post-1.jpeg"
import post2 from "../img/post-2.jpeg"
import post3 from "../img/post-3.png"
import post4 from "../img/post-4.jpeg"
import post5 from "../img/post-5.jpeg"
import profile1 from "../img/post-1-logo.png"
import profile2 from "../img/post-2-profile.jpg"
import profile3 from "../img/post-3-profile.jpg"
import profile4 from "../img/post-4-profile.jpg"
import profile5 from "../img/post-5-profile.jpg"

function Content() {
  const postDetails = [
    {
      profileimage: profile1,
      name: "Web3Go To the DIN",
      username: "Web3Go",
      date: "Apr 30",
      heading: "DeDIN Alliance is Loading >>>",
      bio: <p>web3go.medium.com/introducing-de... <br/> <br/> #DIN #AI #Data</p>,
      img: post1
    },
    {
      profileimage: profile2,
      name: "Developers",
      username: "XDevelopers",
      date: "Ad",
      heading: "Calling all developers !!",
      bio: <p>Innovate with our real-time and historical data on the X API. <br/> <br/> Get Started with PRO.</p>,
      img: post2
    },
    {
      profileimage: profile3,
      name: "Chainlink",
      username: "chainlink",
      date: "Ad",
      heading: "A chainlink hackathon is a chance to fo from zero to hero- -all in 5 weeks",
      bio: <p>And the best part? You have got the Web3 community to help bring your idea to life. <br/><br/>We will see your there</p>,
      img: post3
    },
    {
      profileimage: profile4,
      name: "Game",
      username: "GamesSPL",
      date: "7h",
      heading: "First 2,000 Solana wallets gets a guaranteed $GAME airdrop",
      bio: <p>Drop your $SOL address <br/>Like & repost + Follow @GamesSPL</p>,
      img: post4
    },
    {
      profileimage: profile5,
      name: "BNB Chain",
      username: "BNBCHAIN",
      date: "17h",
      heading: "Name a project entire Web3 community needs to research this week.",
      bio: <p>#BNB #CHAIN #BNBCHAIN</p>,
      img: post5
    }
  ]

  return (
    <div className="second w-full border-x border-[#71767b]">
        <div className="top-nav flex pt-3 items-center border-b border-[#71767b]">
          <div className='flex w-full justify-around mx-4'>
            <h6 className='border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-xs font-bold'>For you</h6>
            <h6 className='text-[#71767b] cursor-pointer text-xs'>Following</h6>
          </div>
          <div className='px-3 mb-3'>
            <IoMdSettings className='cursor-pointer' />
          </div>
        </div>

        <div className="write-post py-3 px-5 border-b border-[#71767b]">
          <div className='flex gap-2'>
            <img src={profileimg} className='w-8 rounded-full' />
            <input type='text' placeholder='What is happening?!' className="placeholder:text-[#71767b] bg-transparent border-none outline-none" />
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className="icons flex gap-3 text-sm pt-5 pl-7 items-center">
              <GrGallery className='cursor-pointer text-[#1d9bf0]' />
              <HiOutlineGif className='cursor-pointer text-[#1d9bf0]' />
              <RiListRadio className='cursor-pointer text-[#1d9bf0]' />
              <FaRegSmile className='cursor-pointer text-[#1d9bf0]' />
              <RiCalendarScheduleLine className='cursor-pointer text-[#1d9bf0]' />
              <CiLocationOn className='cursor-pointer text-[#1d9bf0]' />
            </div>
            <div>
              <button className='bg-[#1d9bf0] hover:bg-[#048de8] py-1 px-3 rounded-full'>Post</button>
            </div>
          </div>
        </div>

        <div className="posts">
          {postDetails.map((post) => (
            <div className='post border-b border-[#71767b] px-5 pb-3'>
              <div className='flex justify-between items-center py-1 my-2'>
                <div className='flex gap-2'>
                    <div className="img">
                        <img src={post.profileimage} className="w-8 h-full rounded-full" />
                    </div>
                    <div className="content">
                      <p className='text-xs'>{post.name} <span className='text-slate-600'>@{post.username} . {post.date}</span></p>
                      <p className='text-[11px] pt-1'>{post.heading}</p>
                    </div>
                </div>
                <div className='icon'>
                    <CgMoreO />
                </div>
              </div>
              <div>
                <p className='text-justify px-10 text-xs'>{post.bio}</p>
              </div>
              <div className='ml-8'>
                <img src={post.img} className='rounded-3xl my-3 mb-4' />
              </div>
              <div className='flex'>
                <div className='flex justify-between text-base pl-7 pr-2 w-full'>
                    <FaRegComment className='cursor-pointer text-[#71767b]' />
                    <BiRepost className='cursor-pointer text-[#71767b] text-lg' />
                    <CiHeart className='cursor-pointer text-[#71767b] text-lg' />
                    <CgInsights className='cursor-pointer text-[#71767b] text-lg' />
                    <CiBookmark className='cursor-pointer text-[#71767b] text-lg' />
                </div>
                <div className='text-xs'>
                  <RiShare2Line className='cursor-pointer text-[#71767b] text-lg' />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Content