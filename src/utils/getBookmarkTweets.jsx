import { useEffect, useState } from "react"
import { getBookmarkTweetsServer } from "./server"
import axios from "axios"

const useGetBookmarkTweets = () => {
    const [bookmarkTweets, setBookmarkTweets] = useState()

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchBookmarkTweets = async () => {
            try {
                const response = await axios.get(getBookmarkTweetsServer, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })

                console.log(response)
                setBookmarkTweets(response.data.data)

            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchBookmarkTweets()
    }, [accessToken])

    return { bookmarkTweets }
}

export default useGetBookmarkTweets