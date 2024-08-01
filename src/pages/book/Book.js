import React from 'react'
import UserLayout from '../../components/layout/UserLayout.js'
import BookTable from '../../components/books/BookTable.js'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Book = () => {

  return(
    <UserLayout title="Books">
    <div className='book'>
      <div className="text-end mb-2" >
        <Link to="/new-book">
        <Button  variant='primary'> Add New Book</Button>
        </Link>
        
      </div>
     <BookTable/>
     </div> 
 
    </UserLayout>
  ) 
}

export default Book