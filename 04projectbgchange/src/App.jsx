import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [color,setColor] = useState("white")
  // colorList = ["red" , "green" , "blue" , "yellow" , "olive" ]
  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor : color }} >

      <h1 className="justify-center flex py-10 text-7xl text-bold">Change Me</h1>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

      <div className="flex flex-wrap justify-center border-2 m-10 px-5 py-3 rounded-4xl gap-10  shadow-2xl backdrop: backdrop-blur-xl" >
        <button className='border-2 border-black-50 rounded-xl px-12 py-2' style={{backgroundColor : "red"}} onClick={() => setColor("red")}>
          RED
        </button>
        <button className='border-2 border-black-50 rounded-xl px-12 py-2' style={{backgroundColor : "blue"}} onClick={() => setColor("blue")}>
          BLUE
        </button>
        <button className='border-2 border-black-50 rounded-xl px-12 py-2' style={{backgroundColor : "yellow"}} onClick={() => setColor("yellow")}>
          YELLOW
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
