import React from 'react'

// Context API works as a global variable which holds the value 
// of any nested component to share the data from here to there

// This creates an EMPTY box (context) that will hold our data
// Think of it like declaring a variable in Django settings that 
// you'll use across your app
const UserContext = React.createContext()

// We export this empty box so other files can use it
export default UserContext;