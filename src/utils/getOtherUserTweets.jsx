import { useEffect, useState } from "react"
import { getOtherUserTweetServer } from "./server"
import axios from "axios"

const useGetOtherUserTweets = (data) => {
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    const [userTweets, setUserTweets] = useState("")
    const [tweetsCount, setTweetsCount] = useState("")

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUserTweets = async () => {
            console.log("data in usegetotherusertweet : ", data)
            try {
                const tweetResponse = await axios.post(getOtherUserTweetServer, { username : data }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
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

export default useGetOtherUserTweets