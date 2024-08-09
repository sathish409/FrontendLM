import {configureStore} from '@reduxjs/toolkit'
import userReducer from './pages/user_signup_login/userSlice.js'
import bookReducer from './pages/book/BookSlice.js'
 const store= configureStore({
    reducer:{
        userInfo: userReducer,
        bookInfo:bookReducer,
    }
})

export default store;