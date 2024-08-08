import React from "react";
import { useQuery } from "@tanstack/react-query";
import { listPost } from "../../APIServices/posts/postsAPI";
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
            <h2>{post?.title}</h2>
            <p>{post?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
