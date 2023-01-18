import axios from 'axios'

const authenticate=async(email:string)=>{
    try {
        return await axios.post("/api/authenticate",{email:email})
    } catch (error) {
        return {error:"User do not exist"}
    }
}

//get user details

const getUser=async(id:string)=>{
try {
    const data=await axios.get(`/api/${id}`);
    return data;
} catch (error) {
    return {error:"password did not match"}
}
}

//register user
const registerUser=async(data:any)=>{
    try {
        const {data:{message},status}=await axios.post("/api/register",data);
        const {username,email}=data;
        if(status===201)
            await axios.post("/api/registerMail",{username,email,text:message})
        Promise.resolve(message);
    } catch (error) {
        return Promise.reject({error})       
    }
}

//login
const loginUser=async(data:any)=>{
    try {
        const {data:{user},status}=await axios.post("/api/login",data)
        if(status===200){
            return Promise.resolve(data)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

//update user
const updateUser=async(response:any)=>{
    try {
        const token=await localStorage.getItem("token");
        const data=await axios.put("/api/updateUser",response,{headers:{"Authorization":`Bearer ${token}`}})
        Promise.resolve({data})
    } catch (error) {
        Promise.reject({error})
    }
}

//generate OTP
const generateOTP=async(email:String)=>{
    try {
        const {data:{code},status} =await axios.get("/api/generateOTP",{params:{email}})
        if(status===201){
            // const {data:{email}}=await getUser()
        }
    } catch (error) {
        return Promise.reject({error})
    }
}

export {authenticate,getUser,registerUser,loginUser,updateUser}