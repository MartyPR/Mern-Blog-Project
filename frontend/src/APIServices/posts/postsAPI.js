import axios from "axios";

export const createPost = async (data) => {
  console.log(data);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/post/create",
      {
        // title: data.title,
        description: data.description,
      }
    );
    console.log("Response from backend:", response.data); // Debugging statement
    if (response.status !== 200) {
      throw new Error("Failed to create payment intent");
    }
    return response.data;
  } catch (error) {
    console.error("Error in createStripePayment:", error); // Debugging statement
    throw error;
  }
};

export const listPost = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/post/list");
    console.log("Response from backend:", response.data);
    if (response.status !== 200) {
      throw new Error("Failed to create payment intent");
    }

    return response.data;
  } catch (error) {
    console.error("Error in createStripePayment:", error);
    throw error;
  }
};

export const postDetails = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/post/${postId}`
    );
    if (response.status !== 200) {
      throw new Error("Failed to create payment intent");
    }
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in createStripePayment:", error);
    throw error;
  }
};

export const updatePost = async (postData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/v1/post/${postData?.postId}`,
      {
        title: postData?.title,
        description: postData?.description,
      }
    );
    console.log("Response from backend:", response.data);
    if (response.status !== 200) {
      throw new Error("Failed to create payment intent");
    }

    return response.data;
  } catch (error) {
    console.error("Error in createStripePayment:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/post/${postId}`
    );

    if (response.status !== 200) {
      throw new Error("Failed to create payment intent");
    }
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in createStripePayment:", error);
    throw error;
  }
};
