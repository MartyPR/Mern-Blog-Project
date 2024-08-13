import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, postDetails } from "../../APIServices/posts/postsAPI";

const PostDetails = () => {
  const { postId } = useParams();
  //!use Query
  const { data, isError, isLoading, error, isSuccess } = useQuery({
    queryFn: () => postDetails(postId),
    queryKey: ["post-Details"],
  });

  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: deletePost,
    mutationKey: ["post-delete"],
  });

  const handleDelete = (id) => {
    mutateAsync(id)
      .then((data) => {
        navigate("/list");
        refetch();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && <p>Successfull</p>}

      <div key={data?.postFound._id}>
        <h2>{data?.postFound.title}</h2>
        <p>{data?.postFound.description}</p>
        <Link to={`/posts/${postId}`}>Update</Link>
        <button onClick={() => handleDelete(postId)}>Delete</button>
      </div>
    </div>
  );

};

export default PostDetails;
