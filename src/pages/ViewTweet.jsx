import React from "react";
import Wrapper from "../components/Wrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { BiRepost } from "react-icons/bi";
import { CgInsights } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPin } from "react-icons/bs";
import PublishTweet from "../components/PublishTweet";
import useGetAllComments from "../utils/getAllComments";

function ViewTweet () {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;

  const { allComments } = useGetAllComments(data._id)

  console.log("data in view tweet: ", data);

  console.log("commments in view tweet: ", allComments.comments)

  return (
    <Wrapper>
      <div className="flex items-center gap-7 px-5 py-4">
        <div>
          <IoArrowBack
            className="text-3xl hover:text-[#1d9bf0] cursor-pointer hover:bg-[#202327] p-1 hover:rounded-full"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <div key={data._id} className="post border-b border-[#71767b] px-5 pb-3">
        <div className="flex justify-between items-center py-1 my-2">
          <div className="flex gap-2">
            <div className="img">
              <img src={data.tweetUserDetail.avatar} className="w-8 h-8 rounded-full" />
            </div>
            <div className="content">
              <p className="text-xs">
                {data.tweetUserDetail.fullName}{" "}
                <span className="text-slate-600">
                  @{data.tweetUserDetail.username} . {data.createdAt}
                </span>
              </p>
              <p className="text-[11px] pt-1">{data.description}</p>
            </div>
          </div>
          <div className="icon cursor-pointer hover:text-[#1d9bf0]">
            <CgMoreO onClick={() => toggleDropdown(data._id)} />
            {/* {visibleDropdown === post._id && (
              <>
                <div className="absolute right-[32%] border border-[#71767b] bg-black rounded-lg overflow-hidden mt-2">
                  <div
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-[#f4212e] font-bold cursor-pointer"
                    onClick={deleteHandler}
                  >
                    <RiDeleteBin5Fill />
                    <p>Delete</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                    <BsPin />
                    <p>Pin to your profile</p>
                  </div>
                </div>
              </>
            )} */}
          </div>
        </div>
        <div>
          {/* <div className="text-justify px-10 text-xs">{post.bio}</div> */}
        </div>
        <div className="ml-9">
          <img src={data.media} className="rounded-3xl my-3 mb-4 w-52" />
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
      <PublishTweet tweetId={data._id}  />

      {Array.isArray(allComments.comments) && allComments.comments.length > 0 ? (
          allComments.comments.map((comment) => (
            <div key={comment._id} className="post border-b border-[#71767b] px-5 pb-3">
        <div className="flex justify-between items-center py-1 my-2">
          <div className="flex gap-2">
            <div className="img">
              <img src={comment.user.avatar} className="w-8 h-8 rounded-full" />
            </div>
            <div className="content">
              <p className="text-xs">
                {comment.user.fullName}{" "}
                <span className="text-slate-600">
                  @{comment.user.username} . {comment.createdAt}
                </span>
              </p>
              <p className="text-[11px] pt-1">{comment.content}</p>
            </div>
          </div>
          <div className="icon cursor-pointer hover:text-[#1d9bf0]">
            <CgMoreO onClick={() => toggleDropdown(comment._id)} />
            {/* {visibleDropdown === post._id && (
              <>
                <div className="absolute right-[32%] border border-[#71767b] bg-black rounded-lg overflow-hidden mt-2">
                  <div
                    className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-[#f4212e] font-bold cursor-pointer"
                    onClick={deleteHandler}
                  >
                    <RiDeleteBin5Fill />
                    <p>Delete</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm hover:bg-[#202327] p-2 text-white font-bold cursor-pointer">
                    <BsPin />
                    <p>Pin to your profile</p>
                  </div>
                </div>
              </>
            )} */}
          </div>
        </div>
        <div>
          {/* <div className="text-justify px-10 text-xs">{post.bio}</div> */}
        </div>
        <div className="ml-9">
          <img src={comment.media} className="rounded-3xl my-3 mb-4 w-52" />
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
        <p>NO REPLIES</p>
      )}
      
    </Wrapper>
  );
}

export default ViewTweet;
