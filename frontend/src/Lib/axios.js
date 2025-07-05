// frontend/src/Lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5002/api", // or your API URL
  withCredentials: true, // if you're using cookies for auth
});
