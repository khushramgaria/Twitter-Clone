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
import post1 from "../assets/post-1.jpeg";
import post2 from "../assets/post-2.jpeg";
import post3 from "../assets/post-3.png";
import post4 from "../assets/post-4.jpeg";
import post5 from "../assets/post-5.jpeg";
import profile1 from "../assets/post-1-logo.png";
import profile2 from "../assets/post-2-profile.jpg";
import profile3 from "../assets/post-3-profile.jpg";
import profile4 from "../assets/post-4-profile.jpg";
import profile5 from "../assets/post-5-profile.jpg";
import PublishTweet from "../components/PublishTweet";
import useGetAllTweets from "../utils/getAllTweets";

function Home() {
  const { allTweets } = useGetAllTweets()
  console.log("All Tweets: ", allTweets)
  const postDetails = [
    {
      profileimage: profile1,
      name: "Web3Go To the DIN",
      username: "Web3Go",
      date: "Apr 30",
      heading: "DeDIN Alliance is Loading >>>",
      bio: (
        <p>
          web3go.medium.com/introducing-de... <br /> <br /> #DIN #AI #Data
        </p>
      ),
      img: post1,
    },
    {
      profileimage: profile2,
      name: "Developers",
      username: "XDevelopers",
      date: "Ad",
      heading: "Calling all developers !!",
      bio: (
        <p>
          Innovate with our real-time and historical data on the X API. <br />{" "}
          <br /> Get Started with PRO.
        </p>
      ),
      img: post2,
    },
    {
      profileimage: profile3,
      name: "Chainlink",
      username: "chainlink",
      date: "Ad",
      heading:
        "A chainlink hackathon is a chance to fo from zero to hero- -all in 5 weeks",
      bio: (
        <p>
          And the best part? You have got the Web3 community to help bring your
          idea to life. <br />
          <br />
          We will see your there
        </p>
      ),
      img: post3,
    },
    {
      profileimage: profile4,
      name: "Game",
      username: "GamesSPL",
      date: "7h",
      heading: "First 2,000 Solana wallets gets a guaranteed $GAME airdrop",
      bio: (
        <p>
          Drop your $SOL address <br />
          Like & repost + Follow @GamesSPL
        </p>
      ),
      img: post4,
    },
    {
      profileimage: profile5,
      name: "BNB Chain",
      username: "BNBCHAIN",
      date: "17h",
      heading:
        "Name a project entire Web3 community needs to research this week.",
      bio: <p>#BNB #CHAIN #BNBCHAIN</p>,
      img: post5,
    },
  ];
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
                    <p className="text-[11px] pt-1">{tweet.description}</p>
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
