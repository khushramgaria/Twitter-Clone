import { useEffect, useState } from "react"
import { getUserTweetsServer } from "./server"
import axios from "axios"

const useGetUserTweets = () => {
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    const [userTweets, setUserTweets] = useState("")
    const [tweetsCount, setTweetsCount] = useState("")

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUserTweets = async () => {
            try {
                // const userResponse = await axios.get(getCurrentUserServer, {
                //     headers: {
                //         'Authorization': `Bearer ${accessToken}`
                //     }
                // })

                const tweetResponse = await axios.get(getUserTweetsServer, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })

                // console.log(userResponse)
                console.log(tweetResponse)
                // setName(userResponse.data.data.fullName);
                // setUsername(userResponse.data.data.username);
                // setAvatar(userResponse.data.data.avatar);
                // setCreatedAt(userResponse.data.data.createdAt)
                setUserTweets(tweetResponse.data.data.tweets)
                setTweetsCount(tweetResponse.data.data.tweetsCount)

            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUserTweets()
    }, [accessToken])

    return { userTweets, tweetsCount }
}

export default useGetUserTweets