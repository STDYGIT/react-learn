import {React, useState, useContext} from 'react'
// useContext is the hook that lets us ACCESS the context data

import UserContext from '../context/UserContext'
// Import the context box we want to read from

export default function Login() {
    
    // Local state for form inputs
    // These store what user types in the form
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // 🔥 THIS IS THE MAGIC LINE 🔥
    // useContext(UserContext) gives us access to the data 
    // stored in UserContext.Provider
    // We're extracting ONLY setUser function (not user data itself)
    // This setUser came from UserContextProvider's value={{user, setUser}}
    const {setUser} = useContext(UserContext)

    // Function that runs when user clicks Submit button
    const handelSubmit = (e) => {
        e.preventDefault()  // Prevents page refresh on form submit
        
        // Update the global user state with username and password
        // This setUser is the SAME setUser from UserContextProvider
        // Now ANY component using UserContext can access this user data
        setUser({username, password})
    }
    
    return (
        <div>
            <h2>Login</h2>
            
            {/* Username input field */}
            <input 
                type="text" 
                value={username}  // Controlled input - value comes from state
                onChange={(e) => setUsername(e.target.value)}  // Update state on typing
                placeholder="username" 
            />
            
            {/* Password input field */}
            <input 
                type="password" 
                value={password}  // Controlled input - value comes from state
                onChange={(e) => setPassword(e.target.value)}  // Update state on typing
                placeholder="password" 
            />
            
            {/* Submit button triggers handelSubmit function */}
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}