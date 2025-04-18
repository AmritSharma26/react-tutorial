import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// react reacts on variable updation

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    counter += 1;
    setCounter(counter)   // updates on UI
    console.log("value added", counter)
  }

  const removeValue = () => {
    if(counter > 0){
      counter -= 1
      setCounter(counter)
      console.log("Value Removed", counter)
    }
    return;
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button> 
      <br/><br/>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
