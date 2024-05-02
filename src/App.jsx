import React from "react"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
import News from "./components/News"

function App() {
  

  return (
    <>
      <div className="container mx-auto flex bg-black text-white">
        <Sidebar />
        <Content />
        <News />
      </div>
    </>
  )
}

export default App