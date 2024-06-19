import { useEffect, useState } from "react"
import { getAllTweetServer } from "./server"
import axios from "axios"

const useGetAllTweets = () => {
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    const [allTweets, setAllTweets] = useState([])

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUserTweets = async () => {
            try {
                const response = await axios.get(getAllTweetServer, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })

                // console.log(userResponse)
                console.log("tweetResponse: ",response)
                // setName(userResponse.data.data.fullName);
                // setUsername(userResponse.data.data.username);
                // setAvatar(userResponse.data.data.avatar);
                // setCreatedAt(userResponse.data.data.createdAt)
                setAllTweets(response.data.data)

            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUserTweets()
    }, [accessToken])

    return { allTweets }
}

export default useGetAllTweets