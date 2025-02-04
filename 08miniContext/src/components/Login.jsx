import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(UserContext); // send the data is in userContext

    const submitData = (e) =>{
        e.preventDefault();
        setUser({name , password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='username ' value={name} onChange={(e)=>setName(e.target.value)}  /><br />
      <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  /> <br />
      <button onClick={submitData}>Submit</button>
    </div>
  )
}
