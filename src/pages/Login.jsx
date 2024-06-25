import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { loginServer } from "../utils/server"
import axios from 'axios'
import { IoArrowBack } from "react-icons/io5";

function Login() {
    const navigate = useNavigate()
    const [userIdComp, setUserIdComp] = useState(true)
    const [passwordComp, setPasswordComp] = useState(false)

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const [loggingIn, setLoggingIn] = useState(false)

    const goBackHandler = (e) => {
        e.preventDefault()
        setUserIdComp(true)
        setPasswordComp(false)
    }
    const goToPassHandler = (e) => {
        e.preventDefault()
        setUserIdComp(false)
        setPasswordComp(true)
    }

    const onChangeUserId = (value) => {
        setUserId(value)
        setLoggingIn(false)
        setError("")
    }

    const onChangePassword = (value) => {
        setPassword(value)
        setLoggingIn(false)
        setError("")
    }

    const loginHandler = async(e) => {
        e.preventDefault()
        setLoggingIn(true)

        try {
            const response = await axios.post(loginServer, {
                username: userId,
                email: userId,
                password
            })

            console.log("response: ", response)

            if(response.data.status === 400) {
                console.log(response.data.message)
                setError(response.data.message)
                setLoggingIn(false)
            }

            if (response.data.statusCode === 200) {
                console.log("User Login Successfully");
                navigate("/home")
                localStorage.setItem("accessToken", response.data.data.accessToken);
                setLoggingIn(false)
              }
        } catch (error) {
            console.log("Error while logging in user !!", error)
        }

    }

  return (
    <>
        <div className={`md:w-96 w-80 justify-center mx-auto mt-4 pt-4 ${loggingIn ? "cursor-wait" : ""}`}>
            <div className="logo invert my-4 md:pl-8">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="cursor-pointer mx-auto w-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div className={`absolute top-14 cursor-pointer ${userIdComp ? "hidden" : "" }`}>
                <IoArrowBack 
                className='text-xl hover:text-[#1d9bf0]'
                onClick={goBackHandler}
                />
            </div>
            {userIdComp &&
            <>
            <div>
                <h1 className='font-bold text-3xl my-2 pb-3'>Sign in to X</h1>
            </div>
            <div className='pt-3'>
                <button className='w-full border rounded-full py-3 font-bold bg-white text-black'>Sign in with Google</button>
            </div>
            <div className='mt-4 pt-4'>
                <button className='w-full border rounded-full py-3 font-bold bg-white text-black'>Sign in with Apple</button>
            </div>
            <div className='py-2'>
                <p className='text-center'>or</p>
            </div>
            <div>
                <Input type="text" name="email address, or username" onChange={onChangeUserId} />
            </div>
            <div className='mt-4 pt-4'>
                <button 
                className='w-full border rounded-full py-3 font-bold bg-white text-black' 
                onClick={goToPassHandler}
                >
                    Next
                </button>
            </div>
            <div className='mt-4 pt-4'>
                <button 
                className='w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black' 
                onClick={() => navigate("/forgot-password")}
                >
                    Forgot password?
                </button>
            </div>
            </>
            }
            {passwordComp && 
            <>
            <div className='mb-5'>
                <h1 className='font-bold text-3xl my-2 pb-3'>Enter your password</h1>
            </div>
            <div>
                <div className='space-y-8 mb-2'>
                    <Input type="text" name="email address, or username" newClass="readOnly" value={userId} />
                    <Input type="text" name="Password" onChange={onChangePassword} value={password} />
                </div>
                <Link to="/forgot-password"><span className='text-[#1d9bf0] justify-start text-sm'>Forgot Password?</span></Link>
                <p className='text-red-500 mt-2 text-sm'>{error}</p>
            </div>
            <div className='mt-4 pt-4'>
                <button 
                className={`w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black ${loggingIn ? "cursor-wait": ""}`}
                onClick={loginHandler}
                >
                    {loggingIn ? "Logging In..." : "Login"}
                </button>
            </div>
            </>
            }
            <div className='mt-6'>
                <p className='text-gray-500 text-sm'>Don't have an account? <Link to="/"><span className='text-[#1d9bf0]'>Sign up</span></Link></p>
            </div>
        </div>
    </>
  )
}

export default Login