import { Box, Typography } from '@mui/material'
import React from 'react'
import {useGetUsersQuery} from '../services/userAPI'
import { useNavigate } from 'react-router-dom'

const UsersList = () => {
    const {data,error,isLoading,isFetching,isSuccess}=useGetUsersQuery()
    const navigate=useNavigate()
  return (
     <>
   <Typography variant='h5' align='center'>All Users</Typography>
   {
     error && <Typography>Something went wrong</Typography>
   }
    {
     isFetching && <Typography>Fetching</Typography>
   }
    {
     isLoading && <Typography>Loading</Typography>
   }
   {
     isSuccess && <>
     {
       data.map((item:any)=>(
         <Box key={item.id} bgcolor="lightgoldenrodyellow" my={1} px={2} py={1} sx={{cursor:"pointer"}}  onClick={()=>{navigate(`/users/${item.id}`)}} >
           <Typography>{item.name} | {item.email}</Typography>
         </Box>
       ))
     }
     </>
   }
   </>
  )
}

export default UsersList