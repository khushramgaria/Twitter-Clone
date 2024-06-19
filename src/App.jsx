import React from "react"
import { Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import Tweet from "./pages/Tweet"

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
        </Routes>
      </div>
    </>
  )
}

export default App