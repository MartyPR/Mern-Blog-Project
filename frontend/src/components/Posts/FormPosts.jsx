import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../APIServices/posts/postsAPI";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FormPosts = () => {
  const quillRef = useRef(null);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Add New Post
        </h2>

        {/* Show alert if needed */}

        <form onSubmit={formik.handleSubmit} className="space-y-8">
          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-2">
              <ReactQuill
                ref={quillRef}
                value={formik.values.description}
                onChange={(value) => {
                  setDescription(value);
                  formik.setFieldValue("description", value);
                }}
                className="text-gray-800"
              />
            </div>
            {/* Display error message */}
            {formik.touched.description && formik.errors.description && (
              <span className="text-red-600 text-sm">
                {formik.errors.description}
              </span>
            )}
          </div>

          {/* Category Input */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className="block w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            >
              {/* Replace with actual category options */}
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>

          {/* Image Upload Input */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 shadow-md">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2 text-center"
            >
              Upload Image
            </label>
            <div className="flex flex-col items-center">
              <input
                id="images"
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                // onChange={handleFileChange}
              />
              <label
                htmlFor="images"
                className="cursor-pointer bg-indigo-500 text-white px-5 py-2 rounded-full shadow hover:bg-indigo-600"
              >
                Choose a file
              </label>
            </div>
            {/* Display error message */}

            {/* Preview image */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPosts;
