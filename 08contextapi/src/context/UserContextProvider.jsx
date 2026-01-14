import { useState } from 'react'
// useState hook to manage the user data state

import React from 'react'

import UserContext from './UserContext'
// Import the empty box we created earlier

// This component will WRAP other components and provide them data
// {children} = whatever components are wrapped inside this provider
const UserContextProvider = ({children}) => {
    
    // Create state to store user data
    // Initially user is null (no one logged in)
    const [user, setUser] = useState(null)
    
    return(
        // UserContext.Provider is the "delivery truck" 
        // that delivers data to all nested components
        <UserContext.Provider value={{user, setUser}}>
            {/* 
                {children} means: "render whatever components 
                are wrapped inside UserContextProvider"
                
                Example: If you wrap <Login /> and <Profile /> 
                inside UserContextProvider, then {children} = <Login /> and <Profile />
            */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider