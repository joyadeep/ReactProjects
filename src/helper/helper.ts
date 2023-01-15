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

export {authenticate,getUser}