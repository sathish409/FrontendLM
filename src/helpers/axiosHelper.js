import axios from 'axios'

const rootEP= process.env.REACT_APP_ROOTAPI

const userEP= rootEP + "/users"

const getAccessJWT= ()=>{
   const token= sessionStorage.getItem("accessJWT")
   return token;
}

const axiosProcessor=async(obj)=>{
   
    if(obj.isPrivate){
        obj.headers={
            Authorization: getAccessJWT(),
        }
    }
    try {
        const response= await axios(obj)
        return response.data;
    } catch (error) {
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

export const getUser= async ()=>{
    return axiosProcessor({
         method: 'get',
         url: userEP ,
         isPrivate:true,
     }) 
 }

