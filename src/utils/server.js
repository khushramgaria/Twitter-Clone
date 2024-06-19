const server = "https://twitter-clone-backend-i7jj.onrender.com/api/v1"

const local = "http://localhost:8000/api/v1"

export const registerServer = `${server}/users/register`

export const loginServer = `${server}/users/login`

export const logoutServer = `${server}/users/logout`

export const updateAvatarServer = `${server}/users/update-avatar`

export const updateCoverImageServer = `${server}/users/update-coverimage`

export const getCurrentUserServer = `${server}/users/get-current-user`

export const publishTweetServer = `${server}/tweet/publish-a-tweet`

export const getUserTweetsServer = `${server}/tweet/get-user-tweets`

export const deleteTweetServer = `${server}/tweet/delete-tweet`

export const getAllTweetServer = `${server}/tweet/get-all-tweets`