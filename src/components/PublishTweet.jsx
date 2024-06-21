import React, { useState, useRef, useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import useGetCurrentUser from '../utils/getCurrentUser'
import { GrGallery } from 'react-icons/gr'
import { HiOutlineGif } from 'react-icons/hi2'
import {
    RiListRadio,
    RiCalendarScheduleLine,
    RiDeleteBin5Fill
  } from "react-icons/ri";
import { FaRegSmile } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { IoArrowBack } from 'react-icons/io5'
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Input from '../components/Input'
import { getATweetServer, publishTweetServer } from '../utils/server'
import axios from 'axios'
import { useLocation, useNavigate, Link } from 'react-router-dom'

function PublishTweet() {
    const [media, setMedia] = useState()
    const [description, setDescription] = useState("")
    const [showMedia, setShowMedia] = useState()
    const [isPublishing, setIsPublishing] = useState(false)
    const [tweetPublished, setTweetPublished] = useState(false)
    const [failedPublishing, setFailedPublishing ] = useState(false)
    const [inHomeTab, setInHomeTab] = useState(false)
    const [inTweetTab, setInTweetTab] = useState(true)
    const [newTweetId, setNewTweetId] = useState("")

    const  { avatar } = useGetCurrentUser()
    const tweetRef = useRef()
    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/home') {
            setInHomeTab(true)
            setInTweetTab(false)
        } else if (location.pathname === '/tweet') {
            setInHomeTab(false)
            setInTweetTab(true)
        }
    }, [location])

    const onChangeMedia = (value) => {
      setMedia(value)
      if (value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setShowMedia(e.target.result);
        };
        reader.readAsDataURL(value);
      }
    }

    const handleInput = (e) => {
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
      setDescription(e.target.value)
    };

    const deleteMediaHandler = () => {
      setMedia("")
      setShowMedia("")
    }

    const accessToken = localStorage.getItem("accessToken")

    const tweetHandler = async(e) => {
      e.preventDefault()

      setIsPublishing(true)
      console.log("description: ", description)
      console.log("media: ", media)

      const formData = new FormData()
      formData.append("description", description)
      formData.append("media", media)

      try {
        const response = await axios.post(publishTweetServer, formData, {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      })

      console.log("response: ", response)

      if(response.data.statusCode === 200) {
        console.log("Tweet Published !!")
        console.log(response.data.data._id)
      }
      // navigate("/profile")
      setIsPublishing(false)
      setTweetPublished(true)
      setNewTweetId(response.data.data._id)
      setMedia()
      setShowMedia()
      setDescription("")
      } catch (error) {
        console.log("Error while publishing a tweet", error)
        setIsPublishing(false)
        setFailedPublishing(true)
      }
    }

    const viewHandler = async(e) => {
      e.preventDefault()
      // navigate("/viewtweet", { state: { tweetId: _id } })

      try {
        const response = await axios.get(`${getATweetServer}?newTweetId=${newTweetId}`);

        console.log("response: ", response.data.data[0])

        navigate("/viewtweet", { state: { data: response.data.data[0] }})

      } catch (error) {
        console.log("Error while getting tweet !!", error)
      }
    }

    return (
    <>
        {inTweetTab && 
        <div className='flex items-center gap-7 px-5 py-4'>
            <div>
                <IoArrowBack 
                className='text-3xl hover:text-[#1d9bf0] cursor-pointer hover:bg-[#202327] p-1 hover:rounded-full'
                onClick={() => navigate(-1)}
                />
            </div>
        </div>
        }

        {inHomeTab &&
        <div className="top-nav flex pt-3 items-center border-b border-[#71767b]">
            <div className="flex w-full justify-around mx-4">
                <h6 className="border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-xs font-bold">
                    For you
                </h6>
                <h6 className="text-[#71767b] cursor-pointer text-xs">
                    Following
                </h6>
            </div>
            <div className="px-3 mb-3">
                <IoMdSettings className="cursor-pointer" />
            </div>
        </div>
        }

        <div className="write-post py-3 px-5 border-b border-[#71767b]">
            <div className="flex gap-2 mb-10">
              <img src={avatar} className="w-8 h-8 rounded-full" />
              <textarea 
              ref={tweetRef}
              value={description}
              className='w-full bg-transparent resize-none placeholder:text-[#71767b] border-none outline-none' 
              placeholder="What is happening?!"
              onInput={handleInput} 
              style={{ overflow: 'hidden' }} 
              />
            </div>
            {/* <div className='mb-3'>
              <img src={img} className='w-52 rounded ml-9' />
              <RiDeleteBin5Fill className='absolute' />
            </div> */}
            <div className='mb-3 relative'>
              {showMedia &&
              <>
              <img src={showMedia} className='w-52 rounded ml-9' />
              <RiDeleteBin5Fill 
              className='absolute top-0 left-0 ml-10 mt-1 p-1 text-3xl text-black hover:bg-[#1d9cf020] rounded-full cursor-pointer' 
              onClick={deleteMediaHandler}
              />
              </>
              }
            </div>
            <div className='flex items-center gap-3 text-sm font-bold cursor-pointer '>
                <div className='hover:bg-[#1d9cf020] flex items-center p-1 gap-3 rounded-full px-3 text-[#1d9bf0]'>
                    <FaEarthAfrica />
                    <p>Everyone can reply</p>
                </div>
            </div>
            <div className='border-b border-[#71767b] mt-4'></div>
            <div className="flex justify-between items-center mt-2">
              <div className="icons flex text-lg pt-5 md:pl-7 pl-1 items-center">
                <label htmlFor='choose-post'><GrGallery className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" /></label>
                <HiOutlineGif className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" />
                <RiListRadio className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" />
                <FaRegSmile className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" />
                <RiCalendarScheduleLine className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" />
                <CiLocationOn className="cursor-pointer text-[#1d9bf0] hover:bg-[#1d9cf020] p-2 md:text-4xl text-3xl rounded-full" />
              </div>
              <Input type="file" id="choose-post" className="hidden" onChange={onChangeMedia} />
              <div>
                <button 
                className="bg-[#1d9bf0] hover:bg-[#048de8] py-1 px-3 rounded-full font-bold"
                onClick={tweetHandler}
                >
                  Post
                </button>
              </div>
            </div>
        </div>
        {isPublishing && 
        <div className='ml-3 p-4'>
          <p className='text-[#1d9bf0] font-bold'>Publishing....</p>
        </div>
        }
        {tweetPublished && 
        <div className='ml-3 p-4'>
          <p className='text-[#1d9bf0] font-bold'>Tweet Published !! <button onClick={() => viewHandler}>View</button></p>
        </div>
        }
        {failedPublishing && 
        <div className='ml-3 p-4'>
          <p className='text-red-500 font-bold'>Failed Publishing !!</p>
        </div>
        }
    </>
  )
}

export default PublishTweet