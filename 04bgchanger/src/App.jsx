import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color, width: '100vw', height: '100vh' }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl'> 
          <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
           style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>
            Red</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>
            Green</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>
            Blue</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>
            orange</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-black' 
            style={{backgroundColor:"pink"}} onClick={()=>setColor('pink')}>
            pink</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"yellow"}} onClick={()=>setColor('yellow')}>
            yellow</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"grey"}} onClick={()=>setColor('grey')}>
            grey</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"purple"}} onClick={()=>setColor('purple')}>
            purple</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-black'
             style={{backgroundColor:"Lavender"}} onClick={()=>setColor('lavender')}>
            Lavinder</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-black'
             style={{backgroundColor:"white"}} onClick={()=>setColor('white')}>
            white</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
             style={{backgroundColor:"black"}} onClick={()=>setColor('black')}>
            black</button>

          </div>
      </div>
    </div>
  )
}

export default App
