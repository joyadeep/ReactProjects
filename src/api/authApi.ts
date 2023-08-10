import axios from "axios";

interface Idata{
    email:string;
    password:string
}

export const adminLogin=async(data:Idata)=>{
    try {
        const result=await axios.post("https://portfolio-0osj.onrender.com/api/v1/user/login",data);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}