import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom_input/CustomInput'
import { postAdminUser } from '../../helpers/axiosHelper'
import {toast} from 'react-toastify';
import { useSelector } from 'react-redux';
const initialState={
  fname:"",
  lname:"",
  phone:"",
  email:"",
  password:"",
  confirmPassword:""
}
const AdminSignUp = () => {
 
  
  const [form ,setForm]= useState(initialState)

  const handleOnChange=(e)=>{
    const {name, value}=e.target;
    setForm({
      ...form,
      [name]: value,
    })
 }

  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    const {confirmPassword, ...rest}=form
    if(confirmPassword !== rest.password){
      return alert("password do not match")
    }
     const pending= postAdminUser(rest)
     toast.promise(pending, {
      pending:"please wait",
     })
    const {status, message,} = await pending
   toast[status](message)
  

  }

console.log(form)
  const inputs=[
    {
   label: "First Name",
   name:"fname",
   placeholder:"sam",
   type:"text",
   required:true,
  },
  {
    label: "Last Name",
    name:"lname",
    placeholder:"boga",
    type:"text",
   },
   {
    label: "Email",
    name:"email",
    placeholder:"sam@",
    type:"email",
    required:true,
   },
   {
    label: "Phone",
    name:"phone",
    placeholder:"452",
    type:"number",
   },
   {
    label: "Password",
    name:"password",
    placeholder:"xxx",
    type:"password",
    required:true,
   },
   {
    label: "Confirm Password",
    name:"confirmPassword",
    placeholder:"xxx",
    type:"password",
    required:true,
   },

  ]
  const {user}= useSelector((state)=>state.userInfo)
  return user?._id === "admin" ?  (
    <div className="bg-dark text-light p-3">
    <Form onSubmit={handleOnSubmit} className='form-center border shadow-lg p-2 mt-5'>
      <h2>Creating New Admin</h2>
      <hr />
      {inputs.map((item, i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)}

<div className='d-grid mt-2'>
  <Button variant='primary' type='submit'>
    {""}
    Create a new Admin</Button>
</div>
    </Form>
    
    </div>
   
  ) : ( <h1>You are not authorised to admin page</h1> )
}

export default AdminSignUp