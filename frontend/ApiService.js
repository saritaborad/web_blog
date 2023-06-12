import axios from "axios";

export const GetApi = async (path) => {
 const response = await axios.post(path);
 return response.data.data;
};
