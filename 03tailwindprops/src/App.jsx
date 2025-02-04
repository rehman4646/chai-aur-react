import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-3'>Tailwind test</h1>
      <Card username = 'Mujeeb' button= 'Click me'/>
      <Card username = 'Kiyani' button = 'clicked' />

    </>
  )
}

export default App
