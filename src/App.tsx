import {Routes,Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { useEffect } from 'react'

function ScrollTop(){
  const {pathname}=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return null;
}

function App() {
 
 
  return (
    <>
      <Navbar/>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="service" element={<Service/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  
  )
}

export default App
