import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useSelector } from 'react-redux';
const  Header=()=> {
const {user}= useSelector((state)=> state.adminInfo)

  return (
    <Navbar expand="md" variant='dark' className="bg-dark text-light">
      <Container>
        <Link className="navbar-brand" to="/">Library Management</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (<>
              <Link className='nav-link d-flex align-items-center gap-2' to="/dashboard"><MdDashboard /> Dashboard</Link>
              <Link className='nav-link d-flex align-items-center gap-2' to="/"><FaHome />Home</Link>
              <Link className='nav-link d-flex align-items-center gap-2' to=""><IoLogIn />LogOut</Link>
            </>) : (<>
              <Link className='nav-link d-flex align-items-center gap-2' to="/signup"><SiGnuprivacyguard />SignUp</Link>
              <Link className='nav-link d-flex align-items-center gap-2' to="/login"><IoLogIn />LogIn</Link></>)}
          
            

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;