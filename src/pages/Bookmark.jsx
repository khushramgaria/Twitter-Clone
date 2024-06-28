import React from 'react'
import Wrapper from '../components/Wrapper'
import useGetCurrentUser from '../utils/getCurrentUser'

function Bookmark() {
    const {username} = useGetCurrentUser()
  return (
    <Wrapper>
        <h1 className='font-bold text-xl px-4 pt-3 font-sans'>Bookmark</h1>
        <small className='text-[#71767b] px-4'>@{username}</small>

        <h1 className='text-center font-bold text-2xl md:text-4xl mb-3 mt-8'>Save posts for later</h1>
        <p className='text-sm text-[#71767b] text-center py-2'>Bookmark posts to easily find them again in the future.</p>
    </Wrapper>
  )
}

export default Bookmark