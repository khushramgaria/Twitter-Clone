import React from "react";
import Wrapper from "../components/Wrapper";
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

function Home() {
  const { allTweets } = useGetAllTweets()
  console.log("All Tweets: ", allTweets)
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <PublishTweet />

        {Array.isArray(allTweets) && allTweets.length > 0 ? (
          allTweets.map((tweet) => (
            <div
              key={tweet._id}
              className="post border-b border-[#71767b] px-5 pb-3"
            >
              <div className="flex justify-between items-center py-1 my-2">
                <div className="flex gap-2">
                  <div className="img">
                    <img src={tweet.userDetails.avatar} className="w-8 h-8 rounded-full" />
                  </div>
                  <div className="content">
                    <p className="text-xs">
                      {tweet.userDetails.fullName}{" "}
                      <span className="text-slate-600">
                        @{tweet.userDetails.username} . {tweet.createdAt}
                      </span>
                    </p>
                    <p className="text-[11px] pt-1" onClick={() => navigate("/viewtweet", { state: {}})}>{tweet.description}</p>
                  </div>
                </div>
                <div className="icon cursor-pointer hover:text-[#1d9bf0]">
                  <CgMoreO 
                  // onClick={() => toggleDropdown(tweet._id)}
                  />
                  {/* {visibleDropdown === postweett._id && 
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
                  } */}
                </div>
              </div>
              <div>
                {/* <div className="text-justify px-10 text-xs">{post.bio}</div> */}
              </div>
              <div className="ml-9">
                <img src={tweet.media} className="rounded-3xl my-3 mb-4 w-52" />
              </div>
              <div className="flex">
              <div className="flex justify-between text-base pl-7 pr-2 w-full">
                <FaRegComment className="cursor-pointer text-[#71767b]" />
                <BiRepost className="cursor-pointer text-[#71767b] text-lg" />
                <CiHeart className="cursor-pointer text-[#71767b] text-lg" />
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
      </Wrapper>
    </>
  );
}

export default Home;
