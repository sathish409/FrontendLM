import axios from 'axios'

const rootEP= process.env.REACT_APP_ROOTAPI

const userEP= rootEP + "/users";
const bookEP= rootEP + "/books";
const burrowEP= rootEP + "/burrow";




const getAccessJWT= ()=>{
   const token= sessionStorage.getItem("accessJWT")
   return token;
}
const getRefreshJWT= ()=>{
    const refreshtoken= localStorage.getItem("refreshJWT")
    return refreshtoken;
 }

const axiosProcessor=async(obj)=>{
     const {isPrivate, refreshToken}=obj;
   
    if(isPrivate){
        obj.headers={
            Authorization: refreshToken? getRefreshJWT() : getAccessJWT(),
        }
    }
    try {
        const response= await axios(obj)
        return response.data;
    } catch (error) {
       console.log(error)

       const errorMsg= error?.response?.data?.message;
       if (errorMsg.includes("jwt expired")){
        //get new accessjwt token
const {accessJWT}= await getNewAccessJWT()
console.log(accessJWT)
if(accessJWT){
    sessionStorage.setItem("accessJWT", accessJWT)

       //continue with previous request
       return axiosProcessor(obj)



}
     
       }
        return {
            status:"error",
            message:error.message,
        }
    }
}
export const postAdminUser= async (data)=>{
       return axiosProcessor({
            method: 'post',
            url: userEP +'/admin-user',
            data,
        })
    }

export const loginUser= async (data)=>{
   return axiosProcessor({
        method: 'post',
        url: userEP + '/login',
        data,
   
    }) 
}
export const signOutUser= async (data)=>{
    return axiosProcessor({
         method: 'post',
         url: userEP + '/logout',
         data,
    
     }) 
 }
 

export const getUser= async ()=>{
    return axiosProcessor({
         method: 'get',
         url: userEP ,
         isPrivate:true,
     }) 
 }

 export const getAllUsers= async ()=>{
    return axiosProcessor({
         method: 'get',
         url: userEP + "/all-users",
         isPrivate:true,
     }) 
 }

 export const getNewAccessJWT= async ()=>{
    return axiosProcessor({
         method: 'get',
         url: userEP + "/get-accessjwt",
         isPrivate:true,
         refreshToken: true,
     }) 
 }


 //=====book api

 export const postBook= async (data)=>{
    return axiosProcessor({
         method: 'post',
         url: bookEP,
         data,
         isPrivate:true,
       
     })
 }

 export const getBooks= async (_id)=>{
    return axiosProcessor({
         method: 'get',
         url: _id ? bookEP + "/" + _id : bookEP,
         isPrivate:true,
       
     })
 }

 export const updateBook= async (data)=>{
    return axiosProcessor({
         method: 'put',
         url: bookEP,
         data,
         isPrivate:true,
     
       
     })
 }

 export const deleteBook= async (_id)=>{
    return axiosProcessor({
         method: 'delete',
         url: bookEP + "/" + _id,
         isPrivate:true,
     
       
     })
 }


 //==burrow book

 export const postBurrow= async (data)=>{
    return axiosProcessor({
         method: 'post',
         url: burrowEP,
         data,
         isPrivate:true,
       
     })
 }