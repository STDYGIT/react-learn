import { useContext } from 'react'
import React from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>please Login</div>
    
    return <div>Welcome User {user.username}</div>

}
