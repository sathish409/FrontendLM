
import { toast } from "react-toastify";
import {deleteBook, getBooks, postBook, updateBook } from "../../helpers/axiosHelper.js"
import {setABook, setBooks} from './BookSlice.js'


export const postNewBookAction=(bookObj)=>async(dispatch) =>{
   const pending= postBook(bookObj);
   toast.promise(pending,{
    pending:"plesae wait"
   })
    const {status, message}= await pending;
toast[status](message)

if(status==="success"){
    //cal the func that fetches all the books and updates the store
    
    dispatch(getAllBookAction())

}

}


export const updateBookAction=(bookObj)=>async(dispatch) =>{
    const pending= updateBook(bookObj);
    toast.promise(pending,{
     pending:"plesae wait"
    })
     const {status, message}= await pending;
 toast[status](message)
 
 if(status==="success"){
     //cal the func that fetches all the books and updates the store
  
     dispatch(getAllBookAction())
     dispatch(setABook({}))
 
 }
 
 }

export const getAllBookAction=()=>async(dispatch)=>{
    const {status, books}= await getBooks()
    if (status==="success"){
        dispatch(setBooks(books))
    }

}


export const getABookAction=(_id)=>async(dispatch)=>{
    const {status, books}= await getBooks(_id)
    if (status==="success"){
        dispatch(setABook(books))
    }

}
export const deleteABookAction=(_id)=>async(dispatch)=>{
    const pending= deleteBook(_id);
    toast.promise(pending,{
     pending:"plesae wait"
    })
     const {status, message}= await pending;
 toast[status](message)
 
 if(status==="success"){
     //cal the func that fetches all the books and updates the store
  
     dispatch(getAllBookAction())
     return true;
}

}
