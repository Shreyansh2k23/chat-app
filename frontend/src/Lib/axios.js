// // frontend/src/Lib/axios.js
// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:5002/api", // or your API URL
//   withCredentials: true, // if you're using cookies for auth
// });

// frontend/src/Lib/axios.js
import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : "https://chat-app-in3m.onrender.com/api"; // your Render backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // required for sending cookies/JWTs
});
