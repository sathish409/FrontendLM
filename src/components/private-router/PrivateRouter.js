import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


export const PrivateRouter = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user}= useSelector((state)=>state.adminInfo)
  return user?._id ? children : <Navigate to ="/login" 
  state={{from:{location}}}
  />
}



export const AdminPrivateRouter = ({children}) => {
  const location = useLocation()
    const {user}= useSelector((state)=>state.adminInfo)
// if there is user._id that means user is logedin
//if user,.role ===admin then user is admin
 
if(user?._id && user?.role !=="admin"){
  return <h1>Unauthorised</h1>
}


  return user?.role === "admin" ? 
  (children) 
  :
  (<Navigate to ="/login" 
  state={{from:{location}}}
  />)
}