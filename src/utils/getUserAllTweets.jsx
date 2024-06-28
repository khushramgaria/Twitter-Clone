import { useEffect, useState } from "react"
import { getUserTweetsServer } from "./server"
import axios from "axios"

const useGetUserTweets = () => {
    const [userTweets, setUserTweets] = useState("")
    const [tweetsCount, setTweetsCount] = useState("")

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUserTweets = async () => {
            try {
                const tweetResponse = await axios.get(getUserTweetsServer, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })

                console.log(tweetResponse)
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