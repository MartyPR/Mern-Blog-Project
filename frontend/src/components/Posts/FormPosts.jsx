import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../APIServices/posts/postsAPI";
const FormPosts = () => {
  //Post mutation
  const postMutation = useMutation({
    mutationFn: createPost,
    mutationKey: ["create-post"],
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    //Validation
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
      description: Yup.string().required("Description is required"),
    }),
    //submit
    onSubmit: (values) => {
      // console.log(values);
      postMutation.mutate(values);
    },
  });

//loading State
const isLoading= postMutation.isPending;
//isErr
const isError= postMutation.isError;
//success
const isSuccess= postMutation.isSuccess;
// error
const Error= postMutation.error;


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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormPosts;
