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
    const [loading, setLoading] = useState(true);

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
                setName(response.data.data.fullName);
                setUsername(response.data.data.username);
                setEmail(response.data.data.email)
                setAvatar(response.data.data.avatar);
                setCoverImage(response.data.data.coverImage);
                setCreatedAt(response.data.data.createdAt)
                setBio(response.data.data.bio)
                setLocation(response.data.data.location)
                setWebsite(response.data.data.website)
                setLoading(false)
            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUser()
    }, [accessToken])

    return { name, username, email, avatar, coverImage, createdAt, bio, website, location, loading }
}

export default useGetCurrentUser