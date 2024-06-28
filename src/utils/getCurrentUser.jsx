import { useEffect, useState } from "react"
import { getCurrentUserServer } from "./server"
import axios from "axios"

const useGetCurrentUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [bio, setBio] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [loading, setLoading] = useState(true);
    const [followingUserDetails, setFollowingUserDetails] = useState()

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(getCurrentUserServer, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })

                console.log(response)
                setName(response.data.data[0].fullName);
                setUsername(response.data.data[0].username);
                setEmail(response.data.data[0].email)
                setAvatar(response.data.data[0].avatar);
                setCoverImage(response.data.data[0].coverImage);
                setCreatedAt(response.data.data[0].createdAt)
                setBio(response.data.data[0].bio)
                setLocation(response.data.data[0].location)
                setWebsite(response.data.data[0].website)
                setFollowers(response.data.data[0].followersCount)
                setFollowing(response.data.data[0].channelFollowedToCount)
                setFollowingUserDetails(response.data.data[0].followedTo)
                setLoading(false)
            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUser()
    }, [accessToken])

    return { name, username, email, avatar, coverImage, createdAt, bio, website, location, loading, followers, following, followingUserDetails }
}

export default useGetCurrentUser