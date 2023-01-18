import {create} from 'zustand'

interface Iauth{
    username:string;
}

export const useAuthStore=create((set)=>{
    auth:{
        username:'',
        active:false
    },
    setUsername:(name:string)=>set((state:any)=>({auth:{...state.auth,username:name}}))
})