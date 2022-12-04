import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '../models/user.model'

export const userAPI:any=createApi({
    reducerPath:"userAPI",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>({
        getUsers:builder.query<User[],void>({
            query:()=> '/users'
        }),
        getSingleUser:builder.query<User,number>({
            query:(id)=>`/users/${id}`
        })
    })
})

export const {useGetUsersQuery,useGetSingleUserQuery}=userAPI;