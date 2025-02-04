import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext);
            
    if(!user) return <div>Please you login</div>
    return <div>Wellcome to : {user.name}</div>
  
}
