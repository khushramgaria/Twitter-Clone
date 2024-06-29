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
import { bookmarkServer, getATweetServer, likeTweetServer, retweetServer } from "../utils/server";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { BiVolumeMute } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { TbFlag3 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import Wrapper from '../components/Wrapper'
import useGetCurrentUser from '../utils/getCurrentUser'
import useGetBookmarkTweets from '../utils/getBookmarkTweets'
import { useNavigate } from 'react-router-dom'

function Bookmark() {
  const navigate = useNavigate()
  const {username} = useGetCurrentUser()
  const { bookmarkTweets: initialTweets  } = useGetBookmarkTweets()
  const [ bookmarkTweets, setBookmarkTweets ] = useState(initialTweets);

  const [visibleDropdown, setVisibleDropdown] = useState(null);

  useEffect(() => {
    setBookmarkTweets(initialTweets);
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
        setBookmarkTweets(
          bookmarkTweets.map((tweet) =>
            tweet.tweet._id === tweetId
              ? {
                  ...tweet,
                  isLiked: !tweet.tweet.isLiked,
                  likesCount: tweet.tweet.isLiked ? tweet.tweet.likesCount - 1 : tweet.tweet.likesCount + 1,
                }
              : tweet
          ) 
        );
      } catch (error) {
        console.log("Error while liking tweet !!", error)
      }
    }
  
    const retweetHandler = async(tweetId) => {
      try {
        const response = await axios.post(retweetServer, { tweetId }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
  
        console.log(response)
  
        setBookmarkTweets(
          bookmarkTweets.map((tweet) =>
            tweet._id === tweetId
              ? {
                ...tweet,
                isRetweet: !tweet.tweet.isRetweet,
                retweetsCount: tweet.tweet.isRetweet ? tweet.tweet.retweetsCount - 1 : tweet.tweet.retweetsCount + 1
              } 
              : tweet
          )
        )
      } catch (error) {
        console.log("Error while retweet tweet !!", error)
      }
    }
  
    const bookmarkHandler = async(tweetId) => {
      try {
        const response = await axios.post(bookmarkServer, { tweetId }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
  
        console.log(response)

        setBookmarkTweets(
          bookmarkTweets.map((tweet) =>
            tweet._id === tweetId
              ? {
                ...tweet,
                isBookmarked: !tweet.isBookmarked,
              } 
              : tweet
          )
        )
      } catch (error) {
        console.log("Error while bookmark tweet !!", error)
      }
    }
  return (
    <Wrapper>
        <h1 className='font-bold text-xl px-4 pt-3 font-sans'>Bookmark</h1>
        <small className='text-[#71767b] px-4'>@{username}</small>

        <h1 className='text-center font-bold text-2xl md:text-4xl mb-3 mt-8'>Save posts for later</h1>
        <p className='text-sm text-[#71767b] text-center py-2'>Bookmark posts to easily find them again in the future.</p>
        <hr />
        {Array.isArray(bookmarkTweets) && bookmarkTweets.length > 0 ? (
          bookmarkTweets.map((tweet) => (
            <div
              key={tweet.tweet._id}
              className="post border-b border-[#71767b] px-5 pb-3"
            >
              <div className="flex justify-between items-center py-1 my-2">
                <div className="flex gap-2">
                  <div className="img">
                    <img 
                    src={tweet.user.avatar} className="w-8 h-8 rounded-full cursor-pointer" 
                    onClick={() => navigate("/getotheruser", { state: { data: tweet.user.username }})} 
                    />
                  </div>
                  <div className="content">
                    <p className="text-xs" onClick={() => navigate("/getotheruser", { state: { data: tweet.user.username }})} >
                      {tweet.user.fullName}{" "}
                      <span className="text-slate-600">
                        @{tweet.user.username} . {tweet.tweet.createdAt}
                      </span>
                    </p>
                    <p className="text-[11px] pt-1 cursor-pointer" onClick={() => viewHandler(tweet.tweet._id)}>{tweet.tweet.description}</p>
                  </div>
                </div>
                <div className="icon cursor-pointer hover:text-[#1d9bf0]">
                  <CgMoreO 
                  onClick={() => toggleDropdown(tweet.tweet._id)}
                  />
                  {visibleDropdown === tweet.tweet._id && 
                  <>
                  <div className="absolute right-[32%] border border-[#71767b] bg-black rounded-lg overflow-hidden mt-2">
                  <div 
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer"
                    onClick={() => navigate("/getotheruser", { state: { data: tweet.user.username }})} 
                    >
                      <CgProfile
                      />
                      <p>View @{tweet.user.username}</p>
                    </div>
                    <div 
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer"
                    >
                      <RiUserAddLine
                      />
                      <p>Follow @{tweet.user.username}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                      <BiVolumeMute 
                      />
                      <p>Mute @{tweet.user.username}</p>
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
                <img src={tweet.tweet.media} className="rounded-3xl my-3 mb-4 w-52 cursor-pointer" onClick={() => viewHandler(tweet.tweet._id)} />
              </div>
              <div className="flex">
              <div className="flex justify-between text-base pl-7 pr-2 w-full">
                <div className="flex gap-1 text-[#71767b]">
                  <FaRegComment className="cursor-pointer text-[#71767b]" onClick={() => viewHandler(tweet.tweet._id)}  />
                  <small className="mt-[-4px]">{tweet.tweet.commentsCount === 0 ? "" : tweet.tweet.commentsCount}</small>
                </div>
                <div className="flex gap-1 text-[#71767b]">
                  <BiRepost 
                  className={`cursor-pointer text-lg ${tweet.tweet.isRetweet ? "text-green-600" : "text-[#71767b]"}`} 
                  onClick={() => retweetHandler(tweet.tweet._id)}  
                  />
                  <small className="mt-[-4px]">{tweet.tweet.retweetsCount === 0 ? "" : tweet.tweet.retweetsCount}</small>
                </div>
                <div className="flex gap-1 text-[#71767b]">
                  {tweet.tweet.isLiked ? (
                    <>
                    <IoHeartSharp className="cursor-pointer text-red-500 text-lg" onClick={() => likeHandler(tweet.tweet._id)} />
                    <small className="mt-[-3px]">{tweet.tweet.likesCount === 0 ? "" : tweet.tweet.likesCount}</small>
                    </>
                  ) : (
                    <>
                    <IoHeartOutline className="cursor-pointer text-[#71767b] text-lg" onClick={() => likeHandler(tweet.tweet._id)} />
                    <small className="mt-[-3px]">{tweet.tweet.likesCount === 0 ? "" : tweet.tweet.likesCount}</small>
                    </>
                  )}
                </div>
                <CgInsights className="cursor-pointer text-[#71767b] text-lg" />
                <CiBookmark className="cursor-pointer text-[#71767b] text-lg" onClick={() => bookmarkHandler(tweet.tweet._id)} />
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
    </Wrapper>
  )
}

export default Bookmark