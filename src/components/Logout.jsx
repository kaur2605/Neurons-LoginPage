import React,{useState} from 'react'
import useForm from "./useForm"

export default function Logout({GoBackToLogin}) {


 return (
  <div className="welcome">
  
  <h4>Welcome back!</h4>
   <h4>Nice to see you again, we  hope</h4>
   <h4>You are doing great</h4>
   
   <button className="logout" onClick={GoBackToLogin}>Logout</button>
  </div>
 )
}
