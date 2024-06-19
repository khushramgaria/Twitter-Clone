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

                console.log(name)
                console.log(username)
                console.log(avatar)
                console.log(coverImage)
            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUser()
    }, [accessToken])

    return { name, username, email, avatar, coverImage, createdAt }
}

export default useGetCurrentUser