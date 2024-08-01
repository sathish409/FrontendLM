import React, { useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/custom_input/CustomInput'
import { postNewBookAction } from './BookAction'
import { useDispatch } from 'react-redux'

const NewBook = () => {
     const dispatch= useDispatch()
    const [book, setBook]=useState({})

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(postNewBookAction(book));
    }

    console.log(book)
    const handleOnChange=(e)=>{
        
const {name, value}= e.target;
setBook({
    ...book,
    [name]: value,
})



    }


    const inputs=[
        {
         label: "URL",
         name:"thumbnail",
         placeholder:"http://..",
         type:"url",
         required:true,
         
        },
       
        {
         label: "Name",
         name:"name",
         placeholder:"Gethanjali",
         type:"text",
         required:true,
        },
        {
            label: "Author",
            name:"author",
            placeholder:"Tagore",
            type:"text",
            required:true,
           },
           {
            label: "PublishYear",
            name:"publishYear",
            placeholder:"1978",
            type:"number",
            required:true,
           },
           {
            label: "ISBN",
            name:"isbn",
            placeholder:"9781593272821",
            type:"text",
            required:true,
           },
           {
            label: "Description",
            name:"description",
            placeholder:"book details",
            type:"text",
            as:"textarea",
            rows:5,
            required:true,
           },
           
           
     
       ]

  return(
    <UserLayout title="Add new book here">

        <Link to="/books">
        <Button variant="secondary">&lt; Back</Button>
        </Link>
       
<div className="p-3">
     <Form onSubmit={handleOnSubmit}  className="">
        <h4>Enter Book Details</h4>
        <hr />

        {inputs.map((item, i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)   }
     <div className="d-grid p-2">
     <Button variant='primary' type='submit'>
    {""}
    Create new Book</Button>
     </div>
     </Form>
     </div> 

    </UserLayout>
  )
  
}

export default NewBook