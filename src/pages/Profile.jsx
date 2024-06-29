import React, {useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { IoArrowBack } from "react-icons/io5";
import { PiCalendarMinusDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useGetCurrentUser from "../utils/getCurrentUser";
import useGetUserTweets from "../utils/getUserAllTweets";
import { CgMoreO } from "react-icons/cg";
import { BiRepost } from "react-icons/bi";
import { CgInsights } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPin } from "react-icons/bs";
import { deleteTweetServer, getATweetServer, likeTweetServer, retweetServer } from "../utils/server";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const { name, username, avatar, coverImage, createdAt, bio, followers, following } = useGetCurrentUser();
  const { userTweets: initialTweets, tweetsCount } = useGetUserTweets();
  const [ userTweets, setUserTweets] = useState(initialTweets)
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [_id, set_id] = useState("")

  useEffect(() => {
    setUserTweets(initialTweets)
  }, [initialTweets])

  const toggleDropdown = (id) => {
    setVisibleDropdown(visibleDropdown === id ? null : id);
    set_id(id)
  };

  const accessToken = localStorage.getItem("accessToken")

  const deleteHandler = async (e) => {
    e.preventDefault()

    console.log("_id : ", _id)

    try {
      const response = await axios.delete(deleteTweetServer, { 
        data: { _id },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        } 
      })

      console.log("response: ", response)

      console.log("Tweet deleted successfully !!")
      setUserTweets(userTweets.filter((tweet) => tweet._id !== _id))
      navigate(0)
    } catch (error) {
      console.log("Error while deleting tweet !!", error)
    }
  }

  const viewHandler = async(_id) => {

    try {
      const response = await axios.get(`${getATweetServer}?newTweetId=${_id}`);

      // const response = await axios.get(getATweetServer, { tweetId: _id }, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`
      //   }
      // })

      console.log("response: ", response.data.data[0])

      navigate("/viewtweet", { state: { data: response.data.data[0], _id }})

    } catch (error) {
      console.log("Error while getting tweet !!", error)
    }
  }

  const likeHandler = async(tweetId) => {
    console.log("tweetId in profile likehandler: ", tweetId)

    try {
      const response = await axios.post(likeTweetServer, { tweetId }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })

      console.log("like response: ", response)

      setUserTweets(
        userTweets.map((tweet) => 
          (tweet._id || tweet.tweet?._id) === tweetId
          ?
          {...tweet, isLiked: !tweet.isLiked , likesCount: tweet.isLiked ? tweet.likesCount - 1 : tweet.likesCount + 1} 
          :
          tweet
        )
      )

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
    } catch (error) {
      console.log("Error while retweet tweet !!", error)
    }
  }

  return (
    <Wrapper>
      <div>
        <div className="flex items-center gap-7 px-5 py-1 border-b border-[#71767b]">
          <div>
            <IoArrowBack 
            className="text-3xl hover:text-[#1d9bf0] cursor-pointer hover:bg-[#202327] p-1 hover:rounded-full" 
            onClick={() => navigate("/home")}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{name}</h1>
            <h1 className="text-sm text-[#71767b]">{tweetsCount[0]?.TotalTweets} posts</h1>
          </div>
        </div>
        <div>
          <div>
            <img src={coverImage} className="object-cover w-full h-48" />
          </div>
        </div>
        <div className="flex items-end justify-between px-5">
          <div className="">
            <img
              src={avatar}
              className="absolute md:top-48 top-56 object-cover w-24 h-2w-24 md:w-36 md:h-36 rounded-full border-4 border-black"
            />
          </div>
          <div className="mt-4">
            <button
              className="border border-[#71767b] text-xs md:text-base rounded-full font-bold py-2 px-3 hover:bg-[#202327]"
              onClick={() => navigate("/editprofile")}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="px-5 md:mt-10 mt-8">
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-[#71767b]">@{username}</p>
          </div>
          <div className="mt-2">
            <p className="text-sm">{bio}</p>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <PiCalendarMinusDuotone className="text-[#71767b]" />
            <p className="text-[#71767b] md:text-base text-sm">Joined {createdAt}</p>
          </div>
          <div className="flex text-sm gap-4 mt-2">
            <p className="text-[#71767b]  md:text-base text-sm">
              <span className="font-bold text-white">{following}</span> Following
            </p>
            <p className="text-[#71767b]  md:text-base text-sm">
              <span className="font-bold text-white">{followers}</span> Followers
            </p>
          </div>
        </div>
        <div className="top-nav flex mt-7 items-center border-b border-[#71767b]">
          <div className="flex w-full justify-around mx-4">
            <h6 className="border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-xs font-bold">
              Posts
            </h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-xs">Replies</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-xs">
              Highlights
            </h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-xs">Articles</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-xs">Media</h6>
            <h6 className="text-[#71767b] cursor-pointer text-[10px] md:text-xs">Likes</h6>
          </div>
          {/* <div className="px-3 mb-3">
                <IoMdSettings className="cursor-pointer" />
                </div> */}
        </div>

        {Array.isArray(userTweets) && userTweets.length > 0 ? (
          userTweets.map((post) => (
            <div
              key={post._id || post.retweetId}
              className="post border-b border-[#71767b] px-5 pb-3"
            >
              {(post.isRetweet && post.user) && (
                <div className="flex items-center gap-1 mt-2 ml-3 text-[#71767b]">
                  <BiRepost />
                  <small>You retweeted</small>
                </div>
              )}
              <div className="flex justify-between items-center py-1 my-2">
                <div className="flex gap-2">
                  <div className="img">
                    <img src={post.user ? post.user[0].avatar : avatar} className="w-8 md:h-8 rounded-full" />
                  </div>
                  <div className="content">
                    <p className="text-xs">
                      {post.user ? post.user[0].fullName : name}{" "}
                      <span className="text-slate-600">
                        @{post.user ? post.user[0].username : username} . {post.createdAt || post.retweetedAt}
                      </span>
                    </p>
                    <p className="text-[11px] pt-1 cursor-pointer" onClick={() => viewHandler(post._id || post.tweet?._id)}>{post.description || post.tweet.description}</p>
                  </div>
                </div>
                <div className="icon cursor-pointer hover:text-[#1d9bf0]">
                  <CgMoreO 
                  onClick={() => toggleDropdown(post._id || post.tweet?._id)}
                  />
                  {visibleDropdown === (post._id || post.tweet?._id) && 
                  <>
                  <div className="absolute right-[32%] border border-[#71767b] bg-black rounded-lg overflow-hidden mt-2">
                    <div 
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-[#f4212e] font-bold cursor-pointer"
                    onClick={deleteHandler}
                    >
                      <RiDeleteBin5Fill 
                      />
                      <p>Delete</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                      <BsPin 
                      />
                      <p>Pin to your profile</p>
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
                <img src={post.media || post.tweet?.media} className="rounded-3xl my-3 mb-4 w-52 cursor-pointer" onClick={() => viewHandler(post._id || post.tweet?._id)} />
              </div>
              <div className="flex">
              <div className="flex justify-between text-base pl-7 pr-2 w-full">
                <div className="flex gap-1 text-[#71767b]">
                  <FaRegComment className="cursor-pointer text-[#71767b]" onClick={() => viewHandler(post._id || post.tweet?._id)} />
                  <small className="mt-[-4px]">{(post.commentsCount === 0 ? "" : post.commentsCount) || (post.tweet?.commentsCount === 0 ? "" : post.tweet?.commentsCount)}</small>
                </div>
                <div className="flex gap-1 text-[#71767b]">
                  <BiRepost 
                  className={`cursor-pointer text-lg ${post.isRetweet ? "text-green-600" : "text-[#71767b]"}`} 
                  onClick={() => retweetHandler(post._id || post.tweet?._id)}
                  />
                  <small className="mt-[-4px]">{(post.retweetsCount === 0 ? "" : post.retweetsCount) || (post.tweet?.retweetsCount === 0 ? "" : post.tweet?.retweetsCount)}</small>
                </div>
                <div className="flex gap-1 text-[#71767b]">
                {post.isLiked || post.tweet?.isLiked ? (
                    <>
                    <IoHeartSharp className="cursor-pointer text-red-500 text-lg" onClick={() => likeHandler(post._id || post.tweet?._id)} />
                    <small className="mt-[-3px]">{(post.likesCount === 0 ? "" : post.likesCount) || (post.tweet?.likesCount === 0 ? "" : post.tweet?.likesCount)}</small>
                    </>
                  ) : (
                    <>
                    <IoHeartOutline className="cursor-pointer text-[#71767b] text-lg" onClick={() => likeHandler(post._id || post.tweet?._id)} />
                    <small className="mt-[-3px]">{(post.likesCount === 0 ? "" : post.likesCount) || (post.tweet?.likesCount === 0 ? "" : post.tweet?.likesCount)}</small>
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
      </div>
    </Wrapper>
  );
}

export default Profile;
