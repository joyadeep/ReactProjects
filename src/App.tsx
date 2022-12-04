import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import PostsList from './pages/PostsList'
import SinglePost from './pages/SinglePost'
import SingleUser from './pages/SingleUser'
import UsersList from './pages/UsersList'
function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersList/>} />
      <Route path='/users/:id' element={<SingleUser/>} />
      <Route path="/posts" element={<PostsList/>} />
      <Route path="/posts/:id" element={<SinglePost/>} />
    </Routes>

  
  )
}

export default App
