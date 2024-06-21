import React, { useState, useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { IoArrowBack } from 'react-icons/io5'
import Input from "../components/Input"
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { updateAvatarServer, updateCoverImageServer, updateUserDetailsServer } from '../utils/server';
import axios from 'axios';
import useGetCurrentUser from '../utils/getCurrentUser';

function EditProfile() {
    const navigate = useNavigate()
    const { name, bio, location, website, loading } = useGetCurrentUser()
    const [updateAvatar, setAvatar] = useState()
    const [updateCoverImage, setCoverImage] = useState()
    const [updateName, setName] = useState(name ? name : "0")
    const [updateBio, setBio] = useState(bio)
    const [updateLocation, setLocation] = useState(location)
    const [updateWebsite, setWebsite] = useState(website)
    const [savingBtn, setSavingBtn] = useState(false)

    useEffect(() => {
        if (!loading) { // Only update state if not loading
            setName(name || "");
            setBio(bio || "");
            setLocation(location || "");
            setWebsite(website || "");
        }
    }, [loading, name, bio, location, website]);

    const onChangeAvatar = (value) => {
        setAvatar(value)
    }
    const onChangeCoverImage = (value) => {
        setCoverImage(value)
    }
    const onChangeName = (value) => {
        setName(value)
    }
    const onChangeBio = (value) => {
        setBio(value)
    }
    const onChangeLocation = (value) => {
        setLocation(value)
    }
    const onChangeWebsite = (value) => {
        setWebsite(value)
    }

    const accessToken = localStorage.getItem("accessToken")

    const updateHandler = async (e) => {
        e.preventDefault()

        setSavingBtn(true)

        const AvatarFormData = new FormData()
        AvatarFormData.append("avatar", updateAvatar)
        const CoverImageFormData = new FormData()
        CoverImageFormData.append("coverImage", updateCoverImage)

        try {
            console.log("Updating Avatar....")
            if (updateAvatar) {
                await axios.patch(updateAvatarServer, AvatarFormData, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })    
            }

            console.log("Updating Cover Image....")   
            if (updateCoverImage) {
                await axios.patch(updateCoverImageServer, CoverImageFormData, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })    
            }

            console.log("Updating User Details....")
            if (updateName || updateBio || updateLocation || updateWebsite || updateDob) {
                await axios.post(updateUserDetailsServer, {
                    fullName: updateName,
                    bio: updateBio,
                    location: updateLocation,
                    website: updateWebsite,
                    dob: updateDob
                },{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
            }

            console.log("Updaiton successfully !!")
            setSavingBtn(false)
            navigate("/profile")
        } catch (error) {
            console.log("Error while updating user details")
            console.log("error: ", error)
        }
    }

    return (
    <Wrapper>
            <div className='flex items-center gap-7 px-5 py-3 border-b border-[#71767b] justify-between'>
                <div className='flex gap-7'>
                    <IoArrowBack 
                    className='text-3xl hover:text-[#1d9bf0] cursor-pointer hover:bg-[#202327] p-1 hover:rounded-full'
                    onClick={() => navigate("/profile")}
                    />
                    <h1 className='text-xl font-bold'>Edit profile</h1>
                </div>
                <div>
                    <button
                    className={`font-bold text-black bg-white py-1 px-4 rounded-full ${savingBtn ? "cursor-wait" : ""}`}
                    onClick={updateHandler}
                    >
                        {savingBtn ? "Saving" : "Save"}   
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center mx-auto text-center space-y-6 mt-4'>
                <div>
                    <p>Cover Image</p>
                    <Input type="file" onChange={onChangeCoverImage} />
                </div>
                <div>
                    <p>Avatar</p>
                    <Input type="file" onChange={onChangeAvatar} />
                </div>
                <div className='space-y-6'>
                    <Input type="text" name="Name" onChange={onChangeName} value={updateName} />
                    <Input type="text" name="Bio" onChange={onChangeBio} value={updateBio} />
                    <Input type="text" name="Location" onChange={onChangeLocation} value={updateLocation} />
                    <Input type="text" name="Website" onChange={onChangeWebsite} value={updateWebsite} />
                </div>
            </div>
            <div className='flex justify-between px-4 hover:bg-[#202327] py-2 cursor-pointer my-5 items-center'>
                <h1 className='text-xl'>Switch to professional</h1>
                <IoIosArrowForward />
            </div>
            <div className='flex justify-between px-4'>
                <h1>Display Confirmed phone number mark</h1>
                <label
                class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                for="switch"
                >
                <input class="peer sr-only" id="switch" type="checkbox" />

                <span class="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

                <span
                    class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0"
                >
                    <span
                    class="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"
                    >
                    </span>
                </span>
                </label>
            </div>
            <div className='px-4 text-sm text-[#71767b] mb-6 mt-1'>
                <p>This mark will only be shown to others in your region. <span className='text-[#1d9bf0]'>Learn more</span></p>
            </div>
    </Wrapper>
  )
}

export default EditProfile