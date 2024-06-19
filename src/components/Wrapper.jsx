import React from 'react'
import Sidebar from './Sidebar'
import News from './News'

function Wrapper(props) {
  return (
    <>
    <Sidebar/>
        <div className="second w-full border-r border-[#71767b]">
            {props.children}
        </div>
    <News/>
    </>
  )
}

export default Wrapper