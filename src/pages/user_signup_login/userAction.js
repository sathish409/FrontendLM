
import { getUser } from "../../helpers/axiosHelper"
import { setUser } from "./userSlice"


export const getUserAction=()=>async(dispatch)=>{
const {status, message, user} = await getUser()
if(status==="success"){
    //send user to redux store
    console.log(user)
    dispatch(setUser(user));

}
}