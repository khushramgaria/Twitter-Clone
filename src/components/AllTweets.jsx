import React, { useState, useEffect } from "react";
import { CgMoreO } from "react-icons/cg";
import { RiShare2Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import { CgInsights } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPin } from "react-icons/bs";
import PublishTweet from "../components/PublishTweet";
import useGetAllTweets from "../utils/getAllTweets";
import { useNavigate } from "react-router-dom";
import { getATweetServer, likeTweetServer } from "../utils/server";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { BiVolumeMute } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { TbFlag3 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

function AllTweets() {
    const navigate = useNavigate()
  const { allTweets: initialTweets } = useGetAllTweets();
  const [ allTweets, setAllTweets ] = useState(initialTweets);

  const [visibleDropdown, setVisibleDropdown] = useState(null);

  useEffect(() => {
    setAllTweets(initialTweets);
  }, [initialTweets]);

  const toggleDropdown = (id) => {
    setVisibleDropdown(visibleDropdown === id ? null : id)
  };


  const viewHandler = async(_id) => {
    try {
      const response = await axios.get(`${getATweetServer}?newTweetId=${_id}`);

      console.log("response: ", response.data.data[0])

      navigate("/viewtweet", { state: { data: response.data.data[0] }})

      

    } catch (error) {
      console.log("Error while getting tweet !!", error)
    }
  }

  const likeHandler = async(tweetId) => {
    console.log("tweetId in profile likehandler: ", tweetId)

    try {
      const response = await axios.post(likeTweetServer, { tweetId }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
      })

      console.log("like response: ", response)
      setAllTweets(
        allTweets.map((tweet) =>
          tweet._id === tweetId
            ? {
                ...tweet,
                isLiked: !tweet.isLiked,
                likesCount: tweet.isLiked ? tweet.likesCount - 1 : tweet.likesCount + 1,
              }
            : tweet
        )
      );
    } catch (error) {
      console.log("Error while liking tweet !!", error)
    }
  }
    return (
    <>
    {Array.isArray(allTweets) && allTweets.length > 0 ? (
          allTweets.map((tweet) => (
            <div
              key={tweet._id}
              className="post border-b border-[#71767b] px-5 pb-3"
            >
              <div className="flex justify-between items-center py-1 my-2">
                <div className="flex gap-2">
                  <div className="img">
                    <img 
                    src={tweet.userDetails.avatar} className="w-8 h-8 rounded-full cursor-pointer" 
                    onClick={() => navigate("/getotheruser", { state: { data: tweet.userDetails.username }})} 
                    />
                  </div>
                  <div className="content">
                    <p className="text-xs" onClick={() => navigate("/getotheruser", { state: { data: tweet.userDetails.username }})} >
                      {tweet.userDetails.fullName}{" "}
                      <span className="text-slate-600">
                        @{tweet.userDetails.username} . {tweet.createdAt}
                      </span>
                    </p>
                    <p className="text-[11px] pt-1 cursor-pointer" onClick={() => viewHandler(tweet._id)}>{tweet.description}</p>
                  </div>
                </div>
                <div className="icon cursor-pointer hover:text-[#1d9bf0]">
                  <CgMoreO 
                  onClick={() => toggleDropdown(tweet._id)}
                  />
                  {visibleDropdown === tweet._id && 
                  <>
                  <div className="absolute right-[32%] border border-[#71767b] bg-black rounded-lg overflow-hidden mt-2">
                  <div 
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer"
                    onClick={() => navigate("/getotheruser", { state: { data: tweet.userDetails.username }})} 
                    >
                      <CgProfile
                      />
                      <p>View @{tweet.userDetails.username}</p>
                    </div>
                    <div 
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer"
                    >
                      <RiUserAddLine
                      />
                      <p>Follow @{tweet.userDetails.username}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                      <BiVolumeMute 
                      />
                      <p>Mute @{tweet.userDetails.username}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                      <TbFlag3 
                      />
                      <p>Report Post</p>
                    </div>
                  </div>
                  </>
                  }
                </div>
              </div>
              <div>
                {/* <div className="text-justify px-10 text-xs">{post.bio}</div> */}
              </div>
              <div className="ml-9">
                <img src={tweet.media} className="rounded-3xl my-3 mb-4 w-52 cursor-pointer" onClick={() => viewHandler(tweet._id)} />
              </div>
              <div className="flex">
              <div className="flex justify-between text-base pl-7 pr-2 w-full">
                <div className="flex gap-1 text-[#71767b]">
                  <FaRegComment className="cursor-pointer text-[#71767b]" onClick={() => viewHandler(tweet._id)}  />
                  <small className="mt-[-4px]">{tweet.commentsCount === 0 ? "" : tweet.commentsCount}</small>
                </div>
                <BiRepost className="cursor-pointer text-[#71767b] text-lg" />
                <div className="flex gap-1 text-[#71767b]">
                  {tweet.isLiked ? (
                    <>
                    <IoHeartSharp className="cursor-pointer text-red-500 text-lg" onClick={() => likeHandler(tweet._id)} />
                    <small className="mt-[-3px]">{tweet.likesCount === 0 ? "" : tweet.likesCount}</small>
                    </>
                  ) : (
                    <>
                    <IoHeartOutline className="cursor-pointer text-[#71767b] text-lg" onClick={() => likeHandler(tweet._id)} />
                    <small className="mt-[-3px]">{tweet.likesCount === 0 ? "" : tweet.likesCount}</small>
                    </>
                  )}
                </div>
                <CgInsights className="cursor-pointer text-[#71767b] text-lg" />
                <CiBookmark className="cursor-pointer text-[#71767b] text-lg" />
              </div>
              <div className="text-xs">
                <RiShare2Line className="cursor-pointer text-[#71767b] text-lg" />
              </div>
            </div>
            </div>
          ))
        ) : (
          <div>No tweets available</div>
        )}
    </>
  )
}

export default AllTweets