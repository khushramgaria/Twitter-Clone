import React from "react"
import { Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import Tweet from "./pages/Tweet"
import ViewTweet from "./pages/ViewTweet"
import UserProfile from "./pages/UserProfile"
import Explore from "./pages/Explore"
import Notifications from "./pages/Notifications"
import Messages from "./pages/Messages"
import Grok from "./pages/Grok"
import Bookmark from "./pages/Bookmark"
import Communities from "./pages/Communities"
import Premium from "./pages/Premium"
import ChatSection from "./components/ChatSection"

function App() {

  return (
    <>
      <div className="container mx-auto flex bg-black text-white">
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
          <Route path="/tweet" element={<Tweet/>} />
          <Route path="/viewtweet" element={<ViewTweet/>} />
          <Route path="/getotheruser" element={<UserProfile/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/notification" element={<Notifications/>} />
          <Route path="/message" element={<Messages/>} />
          <Route path="/grok" element={<Grok/>} />
          <Route path="/bookmark" element={<Bookmark/>} />
          <Route path="/communities" element={<Communities/>} />
          <Route path="/premium" element={<Premium/>} />
          <Route path="/chatsection" element={<ChatSection/>} />
        </Routes>
      </div>
    </>
  )
}

export default App