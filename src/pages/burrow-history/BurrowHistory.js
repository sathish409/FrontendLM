import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { useSelector } from 'react-redux'

const BurrowHistory = () => {
  const {user}= useSelector((state)=>state.adminInfo)
  return user?.role === "admin" ? (<UserLayout title={"Students burrow history"}>
    <div>BurrowHistory</div>
    </UserLayout>) : ( <h1>You are not authorised to admin page</h1>
    
  )
}

export default BurrowHistory