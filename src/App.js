
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
import MyBook from './pages/my-books/MyBook.js';
import NewBook from './pages/book/NewBook.js';
import { useEffect } from 'react';
import { getAllBookAction } from './pages/book/BookAction.js';
import { useDispatch } from 'react-redux';
import UpdateBook from './pages/book/UpdateBook.js';
import BookLanding from './pages/book/BookLanding.js';
import { autoLogin } from './pages/user_signup_login/userAction.js';


function App() {
const dispatch= useDispatch()
  useEffect(()=> {
    dispatch(getAllBookAction())
    dispatch(autoLogin())
  },[dispatch])

  return (
    <div className="">
   <Routes>
    {/* public router */}
    <Route path='/' element={<Home/>}/>

    <Route path='/login' element={<LogIn/>}/>

    <Route path='/signup' element={<SignUp/>}/>

    <Route path='/book/:_id' element={ <BookLanding/>}/>

    {/* private router */}
  
    <Route path='/admin_signup' element={
   <AdminPrivateRouter>
      <AdminSignUp/>
   </AdminPrivateRouter>
      

      }/>
    <Route path='/dashboard'    element={
        <PrivateRouter>
         <Dashboard/>
        </PrivateRouter>
     }/>

<Route path='/my-books'  element={
        <PrivateRouter>
         <MyBook/>
        </PrivateRouter>
     }/>
         <Route path='/my-profile' element={
      <PrivateRouter>
        <MyProfile/>
        </PrivateRouter>}/>

    <Route path='/books' element={ 
      <AdminPrivateRouter>
        <Book/>
        </AdminPrivateRouter>}/>
        <Route path='/new-book' element={ 
      <AdminPrivateRouter>
        <NewBook/>
        </AdminPrivateRouter>}/>
        <Route
         path='/edit-book/:_id' element={ 
      <AdminPrivateRouter>
        <UpdateBook/>
        </AdminPrivateRouter>}
        />
      
        
    <Route path='/students' element={
      <PrivateRouter>
        <Student/>
        </PrivateRouter>}/>
    <Route path='/barrow-history' element={
      <PrivateRouter>
        <BurrowHistory/>
        </PrivateRouter>}/>

    


   

   </Routes>
   <ToastContainer />
    </div>
  );
}

export default App;
