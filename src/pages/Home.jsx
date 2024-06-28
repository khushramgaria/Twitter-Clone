import React, { useState, useEffect } from "react";
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
import { getATweetServer, likeTweetServer } from "../utils/server";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { BiVolumeMute } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { TbFlag3 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import AllTweets from "../components/AllTweets";

function Home() {
  

  return (
    <>
      <Wrapper>
        <PublishTweet />

        <AllTweets />
      </Wrapper>
    </>
  );
}

export default Home;
