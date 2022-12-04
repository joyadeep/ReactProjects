import React from "react";
import { useGetSinglePostQuery } from "../services/PostAPI";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const SinglePost = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetSinglePostQuery(id);
  return (
    <>
      {error && <Typography>Something went wrong</Typography>}
      {isLoading && <Typography>Loading</Typography>}
      {isSuccess && <>{
        <Box>
          <Typography variant="h5">{data.title}</Typography>
          <Typography variant="body2">{data.body}</Typography>
        </Box>
      }</>}
    </>
  );
};

export default SinglePost;
