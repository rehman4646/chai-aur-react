import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter , setCounter ] = useState(0);
  const addValue = ()=>{
    if(counter >= 20){
      counter = 20;
    } else {
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
    }
  }
  const substractValue = () => {
    if(counter>0){
      setCounter(counter-1)
    } else {
      counter = 0 ;
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> <br />
      <button onClick={substractValue}>Remove Value {counter} </button>
      <h2>Footer : {counter}</h2>
    </>
  )
}

export default App
