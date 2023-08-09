import {useState,useEffect} from 'react'
import Landing from "./pages/Landing"
import {Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from "./pages/SplashScreen";
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
 const [isServerReady,setIsServerReady]=useState(false)
 useEffect(()=>{
  axiosRetry(axios,{retries:3})
  axios.get("https://portfolio-0osj.onrender.com/").then((res)=>{
    console.log("response from server ==",res)
    setIsServerReady(true)
  }).catch((error)=>console.log("error",error))
 },[])
  return (
    <>
    <Routes>
      <Route path="/" element={ !isServerReady?<SplashScreen/>:<Landing/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="colored"
/>
    </>
  
  )
}

export default App
