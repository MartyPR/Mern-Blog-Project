import axios from "axios";

export const createPost = async (data) => {
    console.log(data);
    
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/post/create",
      {
        title:data.title,
        description:data.description
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
