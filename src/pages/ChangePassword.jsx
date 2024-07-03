import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import { changePassword, checkUserExists } from "../utils/server.js";

function ChangePassword() {
    const navigate = useNavigate()
    const [userIdComp, setUserIdComp] = useState(true)
    const [passwordComp, setPasswordComp] = useState(false)
    const [isChangingPassword, setIsChangingPassword] = useState(false)
    const [passwordChangedSuccess, setPasswordChangedSuccess] = useState(false)

    const [userId, setUserId] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [error, setError] = useState()

    const onChangeUserId = (val) => {
        setError("")
        setUserId(val)
    }
    const onChangeOldPassword = (val) => {
        setError("")
        setOldPassword(val)
    }
    const onChangeNewPassword = (val) => {
        setError("")
        setNewPassword(val)
    }

    const goBackHandler = () => {
        if (userIdComp === true) {
            navigate(-1)
        } 
        else if (passwordComp === true) {
            setPasswordComp(false)
            setUserIdComp(true)
        }
    }

    const goNextHandler = async(e) => {
        e.preventDefault()

        if( userId?.length < 0 || userId === "" ) {
            setError("Fields can't be empty !!")
            return
        }

        try {
            const response = await axios.post(checkUserExists, { userId })

            console.log(response)
        } catch (error) {
            console.log("Error while checking user exists or not")
            setError("Incorrect Credentials !!")
            return
        }
        setUserIdComp(false)
        setPasswordComp(true)
    }

    const passwordChangeHandler = async(e) => {
        e.preventDefault()
        setIsChangingPassword(true)

        try {
            const response = await axios.post(changePassword, { userId, oldPassword, newPassword })

            console.log(response)
            if (response.data.statusCode === 401) {
                setError(response.data.message)
                setIsChangingPassword(false)
                setTimeout(() => {
                    setError("")
                },3000)
            } else if ( response.data.statusCode === 200 ) {
                setPasswordChangedSuccess("Password Changed Successfully !!")
                setTimeout(() => {
                    navigate("/login")
                },2000)
            }
        } catch (error) {
            console.log("Error while changing password !!", error)
            setError("Error while changing password")
            return
        }
    }
  return (
    <>
      <div className="md:w-96 w-80 justify-center mx-auto mt-4 pt-4">
        <div className="logo invert my-4 md:pl-8">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="cursor-pointer mx-auto w-9 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className={`absolute top-14 cursor-pointer`}>
          <IoArrowBack
            className="text-xl hover:text-[#1d9bf0]"
            onClick={goBackHandler}
          />
        </div>

        {userIdComp &&
        <>
        <div>
          <h1 className="font-bold text-3xl">Find your X account</h1>
        </div>
        <div className="my-2 pb-3">
          <p className="text-gray-500 text-sm">
            Enter the email or username associated with your account to change your password.
          </p>
        </div>
        <div>
          <Input
            type="text"
            name="Email or username"
            onChange={onChangeUserId}
            value={userId}
          />
        </div>
        <div>
          <p className="text-red-500 mt-2 text-sm">{error}</p>
        </div>
        <div className="mt-36">
          <button
            className={`w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black`}
            onClick={goNextHandler}
          >
            Next
          </button>
        </div>
        </>
        }

        {passwordComp &&
        <>
        <div>
          <h1 className="font-bold text-3xl">Choose a new password</h1>
        </div>
        <div className="my-2 pb-3">
          <p className="text-gray-500 text-[13.5px]">
            Make sure your new password is 8 character or more. Try including numbers, letters, and punctuation marks for a <span className="text-[#1d9bf0]">strong password</span>
          </p>
          <p className="text-gray-500 text-[13.5px] mt-3">
            You'll be logged out of all active X sessions after your password is changed.
          </p>
        </div>
        <div>
          <Input
            type="password"
            name="Enter old password"
            onChange={onChangeOldPassword}
            value={oldPassword}
          />
          <div className="mt-6"></div>
          <Input
            type="password"
            name="Enter new password"
            onChange={onChangeNewPassword}
            value={newPassword}
          />
        </div>
        <div>
          <p className="text-red-500 mt-2 text-sm">{error}</p>
          <p className="text-green-500 mt-2 text-sm">{passwordChangedSuccess}</p>
        </div>
        <div className="mt-10">
          <button
            className={`w-full border rounded-full py-3 font-bold hover:bg-white hover:text-black ${isChangingPassword ? "cursor-wait" : ""}`}
            onClick={passwordChangeHandler}
          >
            {isChangingPassword ? "Please wait..." : "Change password"}
          </button>
        </div>
        </>
        }
      </div>
    </>
  );
}

export default ChangePassword;
