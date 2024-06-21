import { useEffect, useState } from "react"
import { getAllCommentsServer } from "./server"
import axios from "axios"

const useGetAllComments = (tweetId) => {

    console.log("tweetId in hook: ", tweetId)
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    const [allComments, setAllComments] = useState([])

    // const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchUserComments = async () => {
            try {
                const response = await axios.get(`${getAllCommentsServer}?tweetId=${tweetId}`)

                // console.log(userResponse)
                console.log("Comment Response: ",response)
                // setName(userResponse.data.data.fullName);
                // setUsername(userResponse.data.data.username);
                // setAvatar(userResponse.data.data.avatar);
                // setCreatedAt(userResponse.data.data.createdAt)
                setAllComments(response.data.data)

            } catch (error) {
                console.log("Error fetching user bcoz of invalid access token")
            }
        }

        fetchUserComments()
    }, [])

    return { allComments }
}

export default useGetAllComments