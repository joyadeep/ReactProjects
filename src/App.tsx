import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Auth from './pages/Auth'
import ForgotPW from './pages/ForgotPW'
import Home from './pages/Home'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/auth',
    element:<Auth/>
  },
  {
    path:'/forgot',
    element:<ForgotPW/>
  }
])

function App() {
 
  return (
    <RouterProvider router={router} ></RouterProvider>

  )
}

export default App
