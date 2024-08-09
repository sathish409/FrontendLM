import { Button , Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const BookTable=()=> {
  const {books}= useSelector((state)=> state.bookInfo)
  return (
    <div className="">
      <p className="d-flex justify-content-between">
        <label htmlFor=""> {books.length} Books Found!</label>
        <div>
        <Form.Control type="text" placeholder='search book by name' />
        </div>
      </p>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Info</th>
          <th>Book Summary</th>
          <th>Edit</th>

        </tr>
      </thead>
      <tbody>
        {books.map(({thumbnail, _id, status, name, author, publishYear,isbn, description}, i)=>
         <tr key={i}>
         <td>{i+1}</td>
         <td> <img src={thumbnail} alt="" width={100}/></td>
         <td>
          <h4>{name}</h4>
          <p>
          <span className={ status ==="active" 
          ? " bg-success rounded p-2"
          : "bg-danger rounded p-2"
          }>
            {status}
            </span>
          </p>
        
          <p>
            {author} . {publishYear}
          </p>
         </td>
         <td>
          {description.slice(0, 100)}...
         </td>
         <td>
          <Link to={`/edit-book/${_id}`}>
          <Button variant='warning'>Edit</Button>
          </Link>
          </td>
       </tr>)}
      </tbody>
    </Table>
    </div>
  
  );
}

export default BookTable;