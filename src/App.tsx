import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
        </Route>
      </Routes>
    </>
  
  )
}

export default App
