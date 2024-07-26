import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import BookTable from '../../components/books/BookTable'

const Book = () => {
  return (
    <UserLayout title="Books">
 <div>
 <BookTable/>
 </div>
    </UserLayout>
   
  )
}

export default Book