import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let values = {
    name:"jatin gera",
    age:"20"
  }

  let myarr = [1,2,3,4,56]
  return (
    <>
    <div className="bg-red-600 text-yellow-200 text-4xl rounded-1">hii baby how are you doing</div>
    <Card obj={values}  />
    </>
  )
}

export default App
