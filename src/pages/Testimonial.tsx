import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import TestimonialCard from '../components/TestimonialCard'
import Button from '../components/Button'
import Label from '../components/Label'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import {GrClose} from 'react-icons/gr'
import Image from '../components/Image'
import axios from 'axios'
import {toast} from 'react-toastify';

type Props = {}

export interface Itestimonial{
  _id:string;
  name:string;
  email:string;
  image:string;
  message:string;
  status:boolean;
  designation:string;
}

const PRESET_KEY="wki449l7";
const CLOUD_NAME="joyadeep"

const Testimonial = (props: Props) => {
  const [isOpen,setIsOpen]=useState(false)
  const [isFetching,setIsFetching]=useState(false);
  const [data,setData]=useState({name:'',email:'',designation:'',image:'',message:''})
  const [img,setImg]=useState('');
  const [isLoading,setIsLoading]=useState(false);
  const [testimonials,setTestimonials]=useState<Itestimonial[]>([]);

  useEffect(()=>{
    setIsFetching(true)
    axios.get("https://portfolio-0osj.onrender.com/api/v1/testimonial/active").then((res)=>{
      setTestimonials(res.data.result)
    }).catch((error)=>console.log(error)).finally(()=>setIsFetching(false))
  },[])


  const handleDataChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleImageChange = (e:any) => {
    setImg(e.target.files[0])
    
  };

  const handleClick=async(e:any)=>{
    e.preventDefault();
    let requestData={};
    setIsLoading(true);
    try {
      
      if (img){
        const formdata=new FormData();
      formdata.append('file',img)
      formdata.append('upload_preset',PRESET_KEY)
      const result=await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,formdata,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
    })
    const imageUrl = result.data.url;

    // Update the image URL and other data in state
    setData({ ...data, image: imageUrl });

    // Create a new object containing the data and image URL
    requestData = { ...data, image: imageUrl };
      }
      else{
        requestData=data;
      }
      const response=await axios.post("https://portfolio-0osj.onrender.com/api/v1/testimonial",requestData)
      if(response.status===200){
        setData({name:'',email:'',designation:'',image:'',message:''})
        toast.success("Thank you for your feedback!")
        setIsOpen(false);
      }
      else{
        toast.error("Cannot post feedback!")
      }
    } catch (error) {
      toast.error("Cannot Post !")
    } finally{
      setIsLoading(false)
    }

  }
  const handleModal=(e:any)=>{
    setIsOpen(true);
    document.body.classList.add("overflow-hidden")
  }
  return (
    <>
     {
        isOpen && 
        createPortal(
          <div className={`w-full h-screen fixed inset-0  z-20 bg-slate-200/95 flex items-center justify-center`}>
            <div className='bg-white p-5 rounded-md w-1/2'>
             <GrClose size={24} className='ml-auto cursor-pointer' onClick={()=>{setIsOpen(false);document.body.classList.remove("overflow-hidden")}} />
              <form onSubmit={handleClick} className='flex flex-wrap gap-y-3 justify-between'>
                <div className='w-[49%] flex flex-col'>
                  <Label title='Fullname'/>
                  <Input name="name" value={data.name} handleChange={handleDataChange} />
                </div>
                <div className='w-[49%] flex flex-col'>
                  <Label title='Email'/>
                  <Input name="email" value={data.email} handleChange={handleDataChange}/>
                </div>
                <div className='w-[49%] flex flex-col'>
                  <Label title='Designation'/>
                  <Input name="designation" value={data.designation} handleChange={handleDataChange}/>
                </div>
                <div className='w-[49%] flex flex-col'>
                  <Label title='Image'/>
                  <Image handleChange={handleImageChange} />
                </div>
                <div className='w-full flex flex-col'>
                  <Label title='Message'/>
                  <TextArea classname='w-full' name="message" value={data.message} handleChange={handleDataChange}  />
                </div>
                <Button  title='Submit' disabled={isLoading} classname='mx-auto px-10'/>
              </form>
            </div>
          </div>
          // @ts-ignore
        ,document.getElementById('portal')
        )
      }
    <div className=' px-5 md:px-20'>
        <div className=' flex justify-between items-center gap-10'>
            <div className='w-1/4'></div>
            <h2 className='text-4xl font-bold tracking-tighter capitalize'>What people says</h2>
            <div className='w-1/4 text-right'>
            <Button title='Add' handleClick={handleModal} />
            </div>
        </div>
        {isFetching ? (
  <div className='text-center text-xl pt-10 text-slate-500'>Fetching</div>
) : (
  testimonials.length === 0 ? (
    <div className='text-center text-xl pt-10 text-slate-500'>Testimonial is empty. Be the first one to add one.</div>
  ) : (
    <div className='grid grid-cols-3 gap-3 mt-5'>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial._id} testimonial={testimonial} />
      ))}
    </div>
  )
)}
    </div>
    </>
  )
}

export default Testimonial