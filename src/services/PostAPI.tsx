import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Post} from '../models/post.model';

export const postAPI:any=createApi({
reducerPath:"postAPI",
baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
endpoints:(builder)=>({
    getPosts:builder.query<Post[],void>({
        query:()=>'/posts'
    }),
    getSinglePost:builder.query<Post,number>({
        query:(id)=>`/posts/${id}`
    })
})
})


export const {useGetPostsQuery,useGetSinglePostQuery}=postAPI