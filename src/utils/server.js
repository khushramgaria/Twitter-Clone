import { server } from "./constants"

//Users servers

export const registerServer = `${server}/users/register`

export const loginServer = `${server}/users/login`

export const logoutServer = `${server}/users/logout`

export const updateUserDetailsServer = `${server}/users/update-details`

export const updateAvatarServer = `${server}/users/update-avatar`

export const updateCoverImageServer = `${server}/users/update-coverimage`

export const checkUserExists = `${server}/users/check-user-exists`

export const changePassword = `${server}/users/change-password`

export const getCurrentUserServer = `${server}/users/get-current-user`

export const getOtherUserServer = `${server}/users/get-user`

export const getUserChannelProfileServer = `${server}/users/get-user-channel-profile`


//tweets servers

export const publishTweetServer = `${server}/tweet/publish-a-tweet`

export const getUserTweetsServer = `${server}/tweet/get-user-tweets`

export const deleteTweetServer = `${server}/tweet/delete-tweet`

export const getAllTweetServer = `${server}/tweet/get-all-tweets`

export const getATweetServer = `${server}/tweet/get-a-tweet`

export const getOtherUserTweetServer = `${server}/tweet/get-other-user-tweets`


//comments server

export const addCommentServer = `${server}/comments/add-comment`

export const getAllCommentsServer = `${server}/comments/get-tweet-comments`

export const deleteCommentServer = `${server}/comments/delete-comment`


//likes server

export const likeTweetServer = `${server}/likes/like-tweet`


//followers server

export const followServer = `${server}/followers/toggle-followers`


//retweet server

export const retweetServer = `${server}/retweets/retweet-post`


//bookmark server

export const bookmarkServer = `${server}/bookmarks/bookmark-post`

export const getBookmarkTweetsServer = `${server}/bookmarks/bookmark-tweets`