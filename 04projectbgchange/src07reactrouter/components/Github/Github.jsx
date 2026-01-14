import React , {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  console.log(data);
  
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/stdygit")
  //   .then(res => res.json())
  //   .then(data => setData(data))
    
  // })
  // console.log(data);
  
  return (
    <>
    <img src={data.avatar_url} alt="" />
    <div className='text-center m-4 p-5 text-3xl text-blue-300'>Github Public Repos : {data.public_repos} </div>
    </>
  )
}

export const githubInfoLoader = async () => {
  const response  = await fetch("https://api.github.com/users/stdygit")
  return response.json()
}

export default Github;