import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

function News() {
    const news = [
        {
            trend: "Politics . Trend",
            tag: "#Voting",
            posts: "2,330 posts"
        },
        {
            trend: "Trending In India",
            tag: "#ArrestModi",
            posts: "3,380 posts"
        },
        {
            trend: "Politics . Trending",
            tag: "Rs 2.10",
            posts: "2,822 posts"
        },
        {
            trend: "Business & finance . Trending",
            tag: "#crypto",
            posts: "32.2K posts"
        },
    ]
  return (
    <div className="third w-[70%]">
        <div className="sticky top-0 pt-1">
        <div className="search flex items-center gap-4 m-2 ml-5 w-[70%] bg-[#202327] py-1 px-3 rounded-full">
            <FaSearch className='text-[#71767b] '/>
            <input type="search" className='bg-transparent border-none outline-none placeholder:text-[#71767b]' placeholder='Search' />
        </div>
        <div className="subscribe w-[70%] border mx-2 my-3 ml-5 rounded-xl p-2 pr-5">
            <h6 className='font-bold'>Subscribe to Premium</h6>
            <p className='text-xs text-justify my-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className='bg-[#1d9bf0] hover:bg-[#048de8] text-sm font-bold py-1 px-4 rounded-full mt-1'>Subscribe</button>
        </div>
        <div className=" w-[70%] popular border ml-5 rounded-xl py-2 px-3">
            <h6 className="font-bold ">What’s happening</h6>
            {news.map((news) => (
                <div className='flex justify-between mt-5'>
                    <div className='cursor-pointer'>
                        <p className='text-xs text-slate-600'>{news.trend}</p>
                        <p className='text-sm font-bold'>{news.tag}</p>
                        <p className='text-xs text-slate-600'>{news.posts}</p>
                    </div>
                    <div>
                        <CgMoreO className='text-slate-600 cursor-pointer' />
                    </div>
                </div>
            ))}
            <button className='text-[#1d9bf0] mt-4 mb-2 text-sm'>Show more</button>
        </div>
        </div>
    </div>
  )
}

export default News