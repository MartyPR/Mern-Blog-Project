import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../APIServices/posts/postsAPI";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
const FormPosts = () => {
  //state for wsing
  const [description, setDescription] = useState("");
  //Post mutation
  const postMutation = useMutation({
    mutationFn: createPost,
    mutationKey: ["create-post"],
  });
  const formik = useFormik({
    initialValues: {
      // title: "",
      description: "",
    },
    //Validation
    validationSchema: Yup.object({
      // title: Yup.string().required("Title is Required"),
      description: Yup.string().required("Description is required"),
    }),
    //submit
    onSubmit: (values) => {
      const data = {
        description: values.description,
      };
      // console.log(values);
      postMutation.mutate(data);
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
        {/* <input
          type="text"
          name="title"
          placeholder="Enter title"
          {...formik.getFieldProps("title")}
        />
        display err msg
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <input
          type="text"
          name="title"
          placeholder="Enter description"
          {...formik.getFieldProps("description")}
        /> */}
        <ReactQuill
          value={formik.values.description}
          onChange={(value) => {
            setDescription(value);
            formik.setFieldValue("description", value);
          }}
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
