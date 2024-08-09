import { Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';


 const UsersTable=({role})=> {
  const {allUsers}= useSelector((state)=>state.userInfo)
  const users = allUsers.filter((item)=>item.role === role)

  return (
    <div className="">
    <p className="d-flex justify-content-between">
      <label htmlFor=""> {users.length} Users Found!</label>
      <div>
      <Form.Control type="text" placeholder='search book by name' />
      </div>
    </p>
<Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Status</th>
        <th>Name</th>
      
        <th>Email</th>
        <th>Phone</th>
        <th>Join date</th>
      </tr>
    </thead>
    <tbody>
      {users.map(({createdAt, _id,status, role, fname, lname, email, phone}, i)=>
       <tr key={i}>
       <td>{i+1}</td>
       <td>{_id} </td>
       <td>
        <h4>{role}</h4>
        <p>
        <span className={ status ==="active" 
        ? " bg-success rounded p-2"
        : "bg-danger rounded p-2"
        }>
          {status}
          </span>
        </p>
       </td>
       <td>
       {fname + " " + lname} 
  
       </td>
    
        <td>
          {email}
        </td>
        <td>
          {phone}
        </td>
        <td>
    {createdAt?.slice(0, 10)}
    </td>
     </tr>)}
    </tbody>
  </Table>
  </div>
  
  );
}

export default UsersTable;