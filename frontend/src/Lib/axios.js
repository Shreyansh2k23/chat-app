import axios from "axios";

// Use the environment variable for the backend URL,
// and provide a fallback for local development if the variable is not set.
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5002/api";

// Log the BASE_URL to confirm it's correct during development
console.log("Connecting to API at:", BASE_URL);

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // required for sending cookies/JWTs
});