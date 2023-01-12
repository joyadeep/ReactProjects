import React,{useState} from 'react'
import AuthorizedHome from '../components/AuthorizedHome';
import GuestHome from '../components/GuestHome';

const Home = () => {
  const[isAuthorized,setIsAuthorized]=useState(true);
  return (
    <>
    {
      isAuthorized?<AuthorizedHome/>:<GuestHome/>
    }
    </>
  )
}

export default Home