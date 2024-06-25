import { useEffect, useState } from "react"
import { getUserChannelProfileServer } from "./server"
import axios from "axios"

const useGetUserAccountProfile = ( data ) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [bio, setBio] = useState('');
    const [userFollowers, setUserFollowers] = useState('');
    const [userFollowedTo, setUserFollowedTo] = useState('');
    const [loading, setLoading] = useState(true);
    const [isFollowed, setIsFollowed] = useState()

    useEffect(() => {
        const fetchUser = async () => {
            console.log(data)
            try {
                const response = await axios.get(getUserChannelProfileServer, {
                    params: { username: data },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })

                console.log(response)
                setName(response.data.data[0].fullName);
                setUsername(response.data.data[0].username);
                setAvatar(response.data.data[0].avatar);
                setCoverImage(response.data.data[0].coverImage);
                setCreatedAt(response.data.data[0].createdAt)
                setBio(response.data.data[0].bio)
                setUserFollowers(response.data.data[0].followersCount)
                setUserFollowedTo(response.data.data[0].channelFollowedToCount)
                setIsFollowed(response.data.data[0].isFollowed)
                setLoading(false)
            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUser()
    }, [])

    return { name, username, avatar, coverImage, createdAt, bio, userFollowers, userFollowedTo, isFollowed, loading }
}

export default useGetUserAccountProfile