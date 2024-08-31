import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter<20){
      counter += 1
      setCounter(counter)
      console.log(counter);
    }
    
    
  }

  const subValue = () => {
    if(counter>0){
      counter -= 1
      setCounter(counter)
      console.log(counter);
    }
    
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Increase counter: {counter}</button>
      <br />
      <button
      onClick={subValue}>Decrease counter: {counter}</button>
    </>
  )
}

export default App
