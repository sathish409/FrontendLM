import { toast } from "react-toastify"
import { postBurrow } from "../../helpers/axiosHelper"
import { getABookAction } from "../book/BookAction"


export const postBurrowAction= (obj)=>async (dispatch)=>{

    const pending =  postBurrow(obj)
    toast.promise(pending, {
        pending: "please wait..."
    })

const {status, message}=  await pending
toast[status](message)

if(status === "success" ){
    //refetch the selected book update the page
    dispatch(getABookAction(obj.bookId))

}
}