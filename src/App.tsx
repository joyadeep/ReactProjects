import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

function App() {
 
  return (
    <>
      <Navbar/>
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
