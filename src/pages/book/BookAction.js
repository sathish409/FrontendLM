
import { toast } from "react-toastify";
import {getBooks, postBook } from "../../helpers/axiosHelper.js"
import {setBooks} from './BookSlice.js'


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


export const getAllBookAction=()=>async(dispatch)=>{
    const {status, books}= await getBooks()
    if (status==="success"){
        dispatch(setBooks(books))
    }

}
