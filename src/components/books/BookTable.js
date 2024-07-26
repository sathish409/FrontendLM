import Table from 'react-bootstrap/Table';

export const BookTable=()=> {
  return (
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
        <tr>
          <td>1</td>
          <td> <img src="  " alt=""/></td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BookTable;