import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatSection from '../components/ChatSection';
import Chats from '../components/Chats';
import { useNavigate } from 'react-router-dom';

function Messages(props) {
  const navigate = useNavigate()
  const [chatUserData, setChatUserData] = useState()

  const userData = (val) => {
    console.log(val)
    setChatUserData(val)
  }

  const userDataForMobile = (val) => {
    navigate("/chatsection", { state: { data: val } })
  }
  return (
    <>
    <Sidebar />

    <div className="hidden md:block second w-full md:w-[70%] border-r border-[#71767b]">
        <Chats data={userData} />
    </div>

    <div className="md:hidden block second w-full md:w-[70%] border-r border-[#71767b]">
        <Chats data={userDataForMobile} />
    </div>

    <div className='hidden md:block w-full border-r border-[#71767b]'>
        <ChatSection chatData={chatUserData} />
    </div>
    </>
  )
}

export default Messages