import React, { useEffect, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import MainLayout from '../../components/layout/MainLayout'
import { CustomInput } from '../../components/custom_input/CustomInput'
import { toast } from 'react-toastify'
import { loginUser } from '../../helpers/axiosHelper'
import { getUserAction } from './userAction.js'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
const LogIn = () => {
  const dispatch= useDispatch()
  const emailRef= useRef("")
  const passwordRef= useRef("")

 const navigate=useNavigate()

const {user}= useSelector((state)=> state.adminInfo)

  useEffect(()=>{
    //redirect to dashboard
user?._id && navigate("/dashboard")

  },[user?._id, navigate])

const handleOnSubmit=async(e)=>{
  e.preventDefault()
  const email= emailRef.current.value;
  const password= passwordRef.current.value;
  if(!email || !password){
    return toast.error("Both the fields are required")
  }
  
///axios
 
  const {status, message, jwts}= await loginUser({email, password})

if (status==="success"){
  const {accessJWT, refreshJWT}= jwts
  sessionStorage.setItem("accessJWT", accessJWT)
  localStorage.setItem("refreshJWT", refreshJWT)
  console.log(sessionStorage, localStorage)
  dispatch(getUserAction());
 
   // fetch user info and redirect to dashboard
   return
}
 
  toast[status](message)
}
 
  const inputs=[
   {
    label: "Email",
    name:"email",
    placeholder:"sam@",
    type:"email",
    required:true,
    pasRef:emailRef,
   },
  
   {
    label: "Password",
    name:"password",
    placeholder:"xxx",
    type:"password",
    required:true,
    pasRef:passwordRef,
   },

  ]
  return (

    <MainLayout>
  <div className='bg-dark text-light p-5'>
  <Form onSubmit={handleOnSubmit} className='form-center border shadow-lg p-2 mt-5'>
      <h2>User Login Area</h2>
      <hr />
      {inputs.map((item, i)=><CustomInput key={i} {...item}/>)}

<div className='d-grid mt-2'>
  <Button variant='primary' type='login'>
    {""}
    Login</Button>
</div>
    </Form>
  </div>
    </MainLayout>
  )
}

export default LogIn