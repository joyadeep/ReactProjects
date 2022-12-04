import React from 'react'
import {useGetPostsQuery} from '../services/PostAPI'
import { useNavigate } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'

const PostsList = () => {
    const {data,error,isFetching,isLoading,isSuccess}=useGetPostsQuery()
    const navigate=useNavigate();
  return (
    <Box>
        <Typography variant="h4" align='center'>All posts</Typography>
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
            isSuccess && 
            <>
            {
                data.map((item:any)=>(
                    <Paper key={item.id} sx={{bgcolor:"#5D6D7E",color:"#F2F3F4",cursor:"pointer",mx:3,p:2,my:2,borderRadius:2}} onClick={()=>navigate(`/posts/${item.id}`)} >
                        <Typography variant={"h5"}>{item.title}</Typography>
                        <Typography variant={"body2"}>{item.body}</Typography>
                    </Paper>
                ))
            }
            </>
        }
    </Box>
  )
}

export default PostsList