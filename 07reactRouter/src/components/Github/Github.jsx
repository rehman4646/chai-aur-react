import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Github() {
const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/hiteshchoudhry`)
        .then(responce => responce.json())
        .then(data =>{
            console.log("Data is ", data)
            setData(data);  
        })
    },[])

  return (
   <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>Github Followers : {data.followers}</div>
  )
}
