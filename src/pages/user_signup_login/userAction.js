
import { getNewAccessJWT, getUser, signOutUser } from "../../helpers/axiosHelper"
import { setUser } from "./userSlice"


export const getUserAction=()=>async(dispatch)=>{
const {status, user} = await getUser()
if(status==="success"){
    //send user to redux store
    dispatch(setUser(user));

}
}



export const autoLogin=()=>async(dispatch)=>{
    // check if we have accessjwt , if so use, get user and mount in the state
    const accessJWT= sessionStorage.getItem("accessJWT")
     const refreshJWT= localStorage.getItem("refreshJWT")
    if(!accessJWT && refreshJWT){
        const response =await getNewAccessJWT();
            console.log(response)
            if (response?.accessJWT){
                sessionStorage.setItem("accessJWT", response.accessJWT)
             dispatch(getUserAction())
            }

    }
    dispatch(getUserAction())

}


export const logoutUser= (email)=>async(dispatch)=>{
    const accessJWT=sessionStorage.getItem("accessJWT")
     // clear the user state
     dispatch(setUser({}));
          //clear browser storage
          sessionStorage.removeItem("accessJWT")
          localStorage.removeItem("refreshJWT")

     await  signOutUser({email, accessJWT})
  
       
       // delete both jjwts from server and both table





}

