import axios from "axios";

export const createGroup = async (formData) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API}/classsy/group`,
      formData
    );

    console.log("response.data", response.data);

    return response.data;
  } catch (error) {
    console.log("error");
    return error;
  }
};
