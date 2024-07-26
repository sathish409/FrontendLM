import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { TbArrowAutofitDown } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
const SideBar = () => {
    const {user}= useSelector((state)=>state.adminInfo)
  return (
    <div className=' sidebar p-2'>
        <div className="top mt-5"> LM-Admin</div>
        <hr />
        <div className="bottom">
           <ul>
           <li>
                <Link className='nav-link d-flex align-items-center gap-2' to="/dashboard"><MdDashboard /> Dashboard</Link>
            </li>
            {
                user?.role==="admin" && (<>
                            <li>
                <Link className='nav-link d-flex align-items-center gap-2' to="/books"><SiBookstack /> Books</Link>
            </li>
            <li>
                <Link className='nav-link d-flex align-items-center gap-2' to="/students"><PiStudentBold />Students</Link>
            </li>
           
            <li>
                <Link className='nav-link d-flex align-items-center gap-2' to="/barrow-history"> <TbArrowAutofitDown />Barrow History</Link>
            </li>
                </>)
            }
            
            <li>
                <Link className='nav-link d-flex align-items-center gap-2' to="/barrow-history"> <TbArrowAutofitDown />My Books</Link>
            </li>
       
            <li>

                <Link className='nav-link d-flex align-items-center gap-2' to="/my-profile"> <CgProfile />My Profile</Link>
            </li>
           </ul> 
        </div>
    </div>
  )
}

export default SideBar