import axios from "axios";

export const createPersonal = async (formData) => {
  try {
    console.log("hello", formData);

    let response = await axios.post(
      "http://localhost:8000/classsy/personal",
      formData
    );

    console.log("response.data", response.data);

    return response.data;
  } catch (error) {
    console.log("error");
    return error;
  }
};
