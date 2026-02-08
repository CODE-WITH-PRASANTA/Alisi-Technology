import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const IMAGE_BASE_URL =
  import.meta.env.VITE_IMAGE_URL || "http://localhost:5000";

const API_URL = axios.create({
  baseURL: API_BASE_URL,
});

export default API_URL;
