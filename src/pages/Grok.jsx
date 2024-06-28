import React from 'react'
import Wrapper from '../components/Wrapper'
import { useNavigate } from 'react-router-dom'

function Grok() {
  const navigate = useNavigate()
  return (
    <Wrapper>
        <h1 className='text-center font-bold text-3xl md:text-4xl mb-3 mt-8'>Grok something</h1>
        <p className='text-sm text-[#71767b] text-center py-2 px-4 md:px-0'>Premium subscribers can now use our most advanced AI, Grok, on X.</p>
        <button
        className='flex py-3 px-5 bg-white text-black hover:bg-white font-bold rounded-full text-center justify-center mx-auto my-5'
        onClick={() => navigate("/premium")}
        >
            Subscribe now
        </button>
    </Wrapper>
  )
}

export default Grok