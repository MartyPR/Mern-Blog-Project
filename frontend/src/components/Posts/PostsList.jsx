import React from "react";
import { useQuery } from "@tanstack/react-query";
import { listPost } from "../../APIServices/posts/postsAPI";
import { Link } from "react-router-dom"; 

const PostsList = () => {
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryFn: listPost,
    queryKey: ["Post-lists"],
  });
  console.log(data);

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && <p>Successfull</p>}
      {data?.posts.map((post) => {
        return (
          <div key={post._id}>
            {/* <h2>{post?.title}</h2>
            <p>{post?.description}</p> */}
            <div
            dangerouslySetInnerHTML={{__html:post?.description}}></div>
            <Link to={`/postDetails/${post._id}`} >more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
