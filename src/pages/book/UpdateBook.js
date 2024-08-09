import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom_input/CustomInput'
import {deleteABookAction, getABookAction, updateBookAction} from './BookAction.js'
import { useDispatch, useSelector } from 'react-redux'

const UpdateBook = () => {
    const dispatch = useDispatch()
    const {_id} = useParams()
    const [form, setForm]= useState({})
    const navigate =useNavigate()

    const {selectedBook}= useSelector((state)=> state.bookInfo)
   
useEffect(()=>{
    if (_id !== form._id){
        dispatch(getABookAction(_id))
        setForm(selectedBook)
    }
},[_id, dispatch,  form._id, selectedBook])

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        if(!window.confirm("Are you sure you wnat to update the book?")){
            return;
        }
        const { __v, updatedAt, isbn, isAvailable, createdAt, ...rest } = form;
       dispatch(updateBookAction(rest)) 
       console.log(rest)
    }

    const handleOnDelete= async ()=>{
   
        if(window.confirm("Are you sure you wnat to delete the book?")){
            const isDeleted =await dispatch(deleteABookAction(_id)) 

            isDeleted && navigate("/books")
            
        }  
    }

    const handleOnChange=(e)=>{
        const {name, value}= e.target;
        setForm({
            ...form,
            [name]:value,
        })
}



    const inputs=[
        {
         label: "URL",
         name:"thumbnail",
         placeholder:"http://..",
         type:"url",
         required:true,
         value: form.thumbnail,
         
        },
       
        {
         label: "Name",
         name:"name",
         placeholder:"Gethanjali",
         type:"text",
         required:true,
         value: form.name,
        },
        {
            label: "Author",
            name:"author",
            placeholder:"Tagore",
            type:"text",
            required:true,
            value: form.author,
           },
           {
            label: "PublishYear",
            name:"publishYear",
            placeholder:"1978",
            type:"number",
            required:true,
            value: form.publishYear,
           },
           {
            label: "ISBN",
            name:"isbn",
            placeholder:"9781593272821",
            type:"text",
            required:true,
            value: form.isbn,
           },
           {
            label: "Description",
            name:"description",
            placeholder:"book details",
            type:"text",
            as:"textarea",
            rows:5,
            required:true,
            value: form.description,
           },
           
           
     
       ]

  return(
    <UserLayout title="Update the Book">

        <Link to="/books">
        <Button variant="secondary">&lt; Back</Button>
        </Link>
       
<div className="p-3">
     <Form onSubmit={handleOnSubmit}  className="">
        <h4>Update in the form below</h4>
        <hr />
        <Form.Group className='mb-3'>
        <label htmlFor="">status</label>
            <Form.Select name='status' onChange={handleOnChange}>
                
<option value="">---Select One---</option>
<option value="active" selected={form.status ==="active"}>Active
    {""}
</option>
<option value="inactive" selected={form.status ==="inactive"}>Inactive
    {""}
</option>
            </Form.Select>

        </Form.Group>

        {inputs.map((item, i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)   }
     <div className="d-grid p-2">
     <Button variant='primary' type='submit'>
    {""}
  Update the Book</Button>
     </div>
 
     </Form>
     <div className="d-grid p-2">
     <Button 
      onClick={handleOnDelete}
     variant='danger' >
  delete the Book</Button>
     </div>
     </div> 

    </UserLayout>
  )
  
}

export default UpdateBook