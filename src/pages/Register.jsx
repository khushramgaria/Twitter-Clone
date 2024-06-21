import React, { useState } from 'react'
import Input from "../components/Input"
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios'
import { registerServer } from '../utils/server';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const [ basicDetailComp, setBasicDetailComp ] = useState(true)
    const [ passwordComp, setPasswordComp] = useState(false)
    const [ usernameComp, setUsernameComp] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const goToPassHandler = (e) => {
        e.preventDefault()
        setBasicDetailComp(false)
        setPasswordComp(true)
        setUsernameComp(false)
    }

    const goToUsernameHandler = (e) => {
        e.preventDefault()
        setBasicDetailComp(false)
        setPasswordComp(false)
        setUsernameComp(true)
    }

    const goBackHandler = (e) => {
        e.preventDefault()
        if (passwordComp === true) {
            setPasswordComp(false)
            setBasicDetailComp(true)
        } 
        else if (usernameComp === true ) {
            setPasswordComp(true)
            setUsernameComp(false)
        }
        else if (basicDetailComp === true) {
            navigate('/login')
        }
    }

    const onChangeName = (value) => {
        setName(value)
    }
    const onChangeEmail = (value) => {
        setEmail(value)
    }
    const onChangeDob = (value) => {
        setDob(value)
    }
    const onChangePassword = (value) => {
        setPassword(value)
    }
    const onChangeUsername = (value) => {
        setUsername(value)
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(registerServer, {
                fullName: name,
                username,
                dob,
                password,
                email
            },{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
    
            console.log("response: ", response)
    
            if(response.data.statusCode === 200) {
                console.log("User Registered Successfully !!")
            }
            navigate("/login")
        } catch (error) {
            console.log("Error while registering user !!", error)
        }
    }
  return (
    <>
        <div className='md:w-96 w-80 justify-center mx-auto mt-4 pt-4'>
            <div className="logo invert my-4 md:pl-8">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="cursor-pointer mx-auto w-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div className={`absolute top-14 cursor-pointer`}>
                <IoArrowBack 
                className='text-xl hover:text-[#1d9bf0]'
                onClick={goBackHandler}
                />
            </div>

            {basicDetailComp &&
            <>
            <div>
                <h1 className='font-bold text-3xl my-2 pb-3'>Create Your Account</h1>
            </div>
            <div className='flex flex-col space-y-6 justify-center'>
                <Input type="text" name="Name" onChange={onChangeName} value={name} />
                <Input type="email" name="Email" onChange={onChangeEmail} value={email} />
            </div>
            <div className='mt-10'>
                <h2 className='font-bold'>Date of birth</h2>
            </div>
            <div>
                <p className='text-xs text-justify text-gray-500 py-2 mb-2'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            </div>
            <div>
                <Input type="date" onChange={onChangeDob} value={dob} />
                {/* pattern="\d{4}-\d{2}-\d{2}" */}
            </div>
            <div className='mt-4 pt-4'>
                <button className='w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black' onClick={goToPassHandler}>Next</button>
            </div>
            <div className='mt-6'>
                <p className='text-gray-500 text-sm'>Alreafy have an account? <Link to="/login"><span className='text-[#1d9bf0]'>Login</span></Link></p>
            </div>
            </>
            }

            {passwordComp && 
            <>
            
            <div>
                <h1 className='font-bold text-3xl'>You'll need a password</h1>
            </div>
            <div className='my-2 pb-3'>
                <p className='text-gray-500 text-sm'>Make sure it's 8 characters or more.</p>
            </div>
            <div>
                <Input type="password" name="Password" onChange={onChangePassword} value={password} />
            </div>
            <div className='mt-24'>
                <p className=' text-gray-500 text-[11.5px] py-5'>By signing up, you agree to the <span className='text-[#1d9bf0]'>Terms of Service</span> and <span className='text-[#1d9bf0]'>Privacy Policy</span>, including <span className='text-[#1d9bf0]'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className='text-[#1d9bf0]'>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='text-[#1d9bf0]'>here</span>.
                </p>
            </div>
            <div>
                <button 
                className='w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black'
                onClick={goToUsernameHandler}
                >
                    Sign up
                </button>
            </div>
            </>
            }

            {usernameComp &&
            <>
            <div>
                <h1 className='font-bold text-3xl'>What should we call you?</h1>
            </div>
            <div className='my-2 pb-3'>
                <p className='text-gray-500 text-sm'>Your @username is unique. You can always change later.</p>
            </div>
            <div>
                <Input type="text" name="@Username" onChange={onChangeUsername} value={username} />
            </div>
            <div className='mt-36'>
                <button 
                className='w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black'
                onClick={registerHandler}
                >
                    Confirm
                </button>
            </div>
            </>
            }
        </div>
    </>
  )
}

export default Register