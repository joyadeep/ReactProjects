import React,{useState} from 'react'
import Label from '../components/Label'
import Button from '../components/Button'
import Input from '../components/Input'
import {adminLogin} from '../api/authApi'
import { useNavigate } from 'react-router-dom'



type Props = {}

const Auth = (props: Props) => {
    const navigate=useNavigate();
    const [data,setData]=useState({email:'',password:''})
    const handleChange=(e:any)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        const resp=await adminLogin(data);
        console.log("login response ==",resp)
        if(resp?.status===200){
            localStorage.setItem("admin_token",resp.data.token);
            navigate("/dashboard");
        }
    }
  return (
    <div className='w-full h-screen flex bg-slate-200 items-center justify-center'>
        <div className=' w-11/12 md:w-1/3 p-3 rounded-md bg-white text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-600'>Login<span className='text-red-500'>.</span></h1>
            <form onSubmit={handleSubmit} className='text-left flex flex-col gap-5'>
                <div>
                    <Label title='Email' />
                    <Input name='email' value={data.email} handleChange={handleChange} />
                </div>
                <div>
                    <Label title='Password' />
                    <Input type='password' name='password' value={data.password} handleChange={handleChange} />
                </div>
                <Button type='submit' title='Sign in' classname='w-full text-xl font-semibold' />
            </form>
        </div>
    </div>
  )
}

export default Auth