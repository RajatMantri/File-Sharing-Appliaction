import axios from "axios";
const url = "http://localhost:8000";

export const upload = async (file) => {
  const res = await axios.post(`${url}/upload`, file);
  return res.data;
};
