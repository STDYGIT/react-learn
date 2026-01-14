import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// we are using useState hook here for changing the ui variable variable are change in logs but react ui need state to change the values


// 6th video
// in ui it is not necessary to push the updates at the instance we can wait and update after some time too
// diffrent types of updates have different priorities which is taken care by react 


function App() {

  let [counter,setcounter] = useState(18)

  const increase = () => {

    counter = counter + 1;
    console.log("add value",counter);
    // setcounter(counter); 
    setcounter(counter); // this is will just overide the method do not update the counter again 
    setcounter((counter) => counter + 1); // this actually will again perform the addition
  }

  const decrease = () => {
    if (counter > 0) {
      console.log("remove value",counter);
      setcounter(counter-1);
    }
    else{
      console.log("value is already zero",counter);

    }
  }

  return (
    <>    
    <h1>this is app.jsx</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={increase} >ADD VALUE</button>
    <br />
    <br />
    <button onClick={decrease} >DECREASE VALUE</button>
    </>
  )
}

export default App
