import { Typography } from '@mui/material'
import React from 'react'
import {useParams} from 'react-router-dom'
import {useGetSingleUserQuery} from '../services/userAPI'

const SingleUser = () => {
    const {id}=useParams()
    const {data,isLoading,isSuccess,error}=useGetSingleUserQuery(id)
  return (
    <>
    <Typography>ID : {id}</Typography>
        {error && <Typography>Error has occured</Typography>}
        {isLoading && <Typography>Loading</Typography>}
        {isSuccess && <Typography>{data.name}</Typography>}
    </>
  )
}

export default SingleUser