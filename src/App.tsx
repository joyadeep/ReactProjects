import Landing from "./pages/Landing"
import {Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
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
