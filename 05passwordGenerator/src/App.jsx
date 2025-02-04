import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef is a react hook
  const passwordRef = useRef(null); // define the hook

  const passGenerate = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVIWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += '!@#$%^+';
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswords = useCallback (()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(()=>{
   passGenerate();
  },[length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white text-3xl py-3'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}  className=' py-2 outline-none w-full py-1 px-3 bg-white text-gray-800'
            placeholder='Password' readOnly ref={passwordRef} />
            <button className='outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0'
             onClick={copyPasswords} >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} className='cursor-pointer mb-4'
               onChange={(e)=>setLength(e.target.value)} />
               <label className='mb-4 mx-1'> Label : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"  defaultChecked={numberAllowed} id="numberInput" className='mb-4'
              onChange={()=>{ setNumberAllowed((prev)=> !prev) }} />
              <label htmlFor="numberInput" className='mb-4'>Numbers </label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox"  defaultChecked={charAllowed} id="characterInput" className='mb-4'
              onChange={()=>{ setCharAllowed((prev)=> !prev) }} />
              <label htmlFor="characterInput" className='mb-4'>Character </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
