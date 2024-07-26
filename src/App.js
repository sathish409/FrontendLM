
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/user_signup_login/SignUp';
import LogIn from './pages/user_signup_login/LogIn';
import AdminSignUp from './pages/admin_signup/AdminSignUp';
import Home from './pages/admin_signup/Home';

import {ToastContainer} from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Book from './pages/book/Book.js';
import Student from './pages/student/Student.js'
import BurrowHistory from './pages/burrow-history/BurrowHistory';
import MyProfile from './pages/my-profile/MyProfile.js';
import { AdminPrivateRouter, PrivateRouter } from './components/private-router/PrivateRouter.js';
function App() {
  return (
    <div className="">
   <Routes>
    {/* public router */}
    <Route path='/' element={<Home/>}/>

    <Route path='/login' element={<LogIn/>}/>

    <Route path='/signup' element={<SignUp/>}/>
    {/* private router */}
  
    <Route path='/admin_signup' element={
   
        <AdminSignUp/>

      }/>
    <Route path='/dashboard'    element={
        <PrivateRouter>
         <Dashboard/>
        </PrivateRouter>
     }/>
    <Route path='/books' element={ 
      <AdminPrivateRouter>
        <Book/>
        </AdminPrivateRouter>}/>
    <Route path='/students' element={
      <AdminPrivateRouter>
        <Student/>
        </AdminPrivateRouter>}/>
    <Route path='/barrow-history' element={
      <AdminPrivateRouter>
        <BurrowHistory/>
        </AdminPrivateRouter>}/>
    <Route path='/my-profile' element={
      <PrivateRouter>
        <MyProfile/>
        </PrivateRouter>}/>
    


   

   </Routes>
   <ToastContainer />
    </div>
  );
}

export default App;
