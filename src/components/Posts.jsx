import React from "react";
import useGetUserTweets from "../utils/getUserAllTweets";
import useGetCurrentUser from "../utils/getCurrentUser";

function Posts() {
    const { userTweets } = useGetUserTweets()
    const { name, username, avatar, createdAt } = useGetCurrentUser()
    console.log("user tweets: ", userTweets)
    return (
    <>
      <div className="posts">
        {userTweets.map((post) => (
          <div
            key={createdAt}
            className="post border-b border-[#71767b] px-5 pb-3"
          >
            <div className="flex justify-between items-center py-1 my-2">
              <div className="flex gap-2">
                <div className="img">
                  <img
                    src={avatar}
                    className="w-8 h-full rounded-full"
                  />
                </div>
                <div className="content">
                  <p className="text-xs">
                    {name}{" "}
                    <span className="text-slate-600">
                      @{username} . {createdAt}
                    </span>
                  </p>
                  <p className="text-[11px] pt-1">{post.description}</p>
                </div>
              </div>
              <div className="icon">
                <CgMoreO />
              </div>
            </div>
            <div>
              {/* <div className="text-justify px-10 text-xs">{post.bio}</div> */}
            </div>
            <div className="ml-8">
              <img src={post.media} className="rounded-3xl my-3 mb-4" />
            </div>
            {/* <div className="flex">
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
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
