import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import {CustomCarousel} from '../../components/carousel/CustomCarousel.js'
import { Col, Container, Row, Form, Alert } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { CustomCard } from '../../components/custom-card/CustomCrad.js'
import { Link } from 'react-router-dom'

const Home = () => {

  const [searchBook, setSearchBook] =useState([])

  const {books}= useSelector((state)=> state.bookInfo)

  useEffect(()=>{
const activeBooks =books.filter((book)=>book.status === "active")
setSearchBook(activeBooks)
  }, [books])
const handleOnSearch=(e)=>{
  const {value}= e.target
  const str = value.toLowerCase()
   const searchedBook= books.filter((book)=> book.status === "active" && book.name.toLowerCase().inludes(str))
   setSearchBook(searchedBook)
}


  return (
    <MainLayout>
  <div>
 
    {/* carousel */}
  
<CustomCarousel/>

    {/* booklist cart */}

    <Container className='mt-5'>
      <Row>
        <Col className='d-flex justify-content-between gap-2'>
        <label htmlFor=""> {searchBook.length}  books found!</label>
  
        <div>
          <Form.Control onChange={handleOnSearch}placeholder='search book by name....'/>

          
        </div>
        <hr />
        </Col>
      </Row>
      <Row>
<Col className='d-flex justify-content-center flex-wrap gap-3 mt-5'>

{searchBook.map((book, i)=>( 
  <Link key={book._id} to={`/book/${book._id}`}><CustomCard  {...book}/></Link>)
  )}

{searchBook.length < 1 && <Alert variant='warnimg'>No Book Found</Alert>}
</Col>
      </Row>

    </Container>
  </div>
    </MainLayout>
  
  )
}

export default Home