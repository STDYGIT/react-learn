import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {user_id} = useParams()
  return (
    <div className='bg-gray-500 text-4xl p-5'>User : {user_id} </div>
  )
}

export default User