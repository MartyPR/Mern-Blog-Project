import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postDetails, updatePost } from "../../APIServices/posts/postsAPI";
import { useParams } from "react-router-dom";
const UpdatePost = () => {
  const { postId } = useParams();
  //!use Query
  const {
    data,
    isError: ErrorQuery,
    isLoading: LoadingQuery,
    error,
  } = useQuery({
    queryFn: () => postDetails(postId),
    queryKey: ["postDetails"],
  });

  //Post mutation
  const postMutation = useMutation({
    mutationFn: updatePost,
    mutationKey: ["update-post"],
  });
  const formik = useFormik({
    initialValues: {
      title: data?.postFound?.title || "",
      description: data?.postFound.description || "",
    },
    enableReinitialize: true,
    //Validation
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
      description: Yup.string().required("Description is required"),
    }),
    //submit
    onSubmit: (values) => {
      const postData = {
        title: values.title,
        description: values.description,
        postId,
      };
      postMutation.mutate(postData);
    },
  });

  //loading State
  const isLoading = postMutation.isPending;
  //isErr
  const isError = postMutation.isError;
  //success
  const isSuccess = postMutation.isSuccess;
  // error
  const Error = postMutation.error;

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {isSuccess && <p>Post created succesfully</p>}
      {isError && <p>{`Something is wrong, error: ${Error}`}</p>}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          {...formik.getFieldProps("title")}
        />
        {/*display err msg */}
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <input
          type="text"
          name="title"
          placeholder="Enter description"
          {...formik.getFieldProps("description")}
        />
        {/*display err msg */}
        {formik.touched.description && formik.errors.description && (
          <span>{formik.errors.description}</span>
        )}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
