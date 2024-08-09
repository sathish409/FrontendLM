import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getABookAction } from './BookAction'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { postBurrowAction } from '../burrow-history/BurrowAction'

const BookLanding = () => {
    const dispatch = useDispatch()
    const { _id }= useParams()
    const [showReview, setShowReview] = useState(false)
    const {selectedBook} = useSelector(state=> state.bookInfo)
    const {user} = useSelector(state=> state.userInfo)
  
    useEffect(()=>{

 _id && dispatch(getABookAction(_id))
    }, [_id, dispatch])

    const {thumbnail, name, author, publishYear, description, isAvailable, dueDate} = selectedBook

   const  handleOnBurrow=()=>{
    if(window.confirm("Are you sure you want to burrow this book")){
      
       const obj = {
        bookId:_id,
        bookName:name,
        thumbnail,
        userId:user._id,
        userName:user.fname,
       }
       dispatch(postBurrowAction(obj))
    }
   }

   

  return (
    <MainLayout>
      <Container>
   <Row className='mt-4'>
    <Col md={5}>
    <img className='shadow-lg img-thumbnail' src={thumbnail} alt="" width="100%"/>

    </Col>
    <Col md={7}>
    <h1>{name} </h1>
    <div> Author:{author} </div>
    <div>PublishYear:{publishYear}</div>

    <p className='mt-3'>
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStarHalfAlt className='text-warning' />
   
    </p>
    <p className='mt-5'>Summary:{description?.slice(0, 20)}...Readmore</p>
    <p className='d-grid pt-2'>
  { isAvailable ? user?._id ?  (<Button onClick={handleOnBurrow}>
        Burrow Book
      </Button>)
      :( 
      <Link to="/login" className="d-grid pt-2">
      <Button>
        Login to burrow
      </Button>
      </Link>)
      : <Button disabled={true}>
     Available form:{dueDate?.slice(0, 10)}
    </Button>
       }
      
     
    </p>
    </Col>
    <Col>
    </Col>
   </Row>
   <Row className='mt-5 shadow-lg'>
   <Col className=''>
   <div className='button-group mb-3'>
   <ButtonGroup aria-label="Basic example">
      <Button variant="primary" onClick={()=>setShowReview(false)}>Description</Button>
      <Button variant="warning" onClick={()=>setShowReview(true)}>Review</Button>
    </ButtonGroup>
   </div>
   {
    showReview ? (<>
      <div className="conatiner d-flex justify-conntent-space-between">
   <div className="d-flex gap-3 shadow-lg">
   <div className="avatar">BS</div>
   <div className="review">
<h4>Best book ever</h4>

<p className='mt-3'>
  <span>
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStarHalfAlt className='text-warning' />
    </span>{""}
    <small> 5 days ago.</small>
   
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque molestiae aut dolor ea, sit laboriosam est facilis, a incidunt eos. Ipsum qui pariatur odit et eos officia itaque voluptatibus!</p>
   </div>
   </div>
   <div className="d-flex gap-3 shadow-lg">
   <div className="avatar">BS</div>
   <div className="review">
<h4>Best book ever</h4>

<p className='mt-3'>
  <span>
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStar className='text-warning' />
    <FaStarHalfAlt className='text-warning' />
    </span>{""}
    <small> 5 days ago.</small>
   
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque molestiae aut dolor ea, sit laboriosam est facilis, a incidunt eos. Ipsum qui pariatur odit et eos officia itaque voluptatibus!</p>
   </div>
   </div>
   </div></>) : description
   }
 
   </Col>
   </Row>
   </Container>
    </MainLayout>
 
  )
}

export default BookLanding