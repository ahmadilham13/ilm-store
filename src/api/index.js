import { getCookie } from "cookies-next";
import axios from "axios";

const ENDPOINT = {
  AUTH: "auth",
  API: "api",
};
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: `${[process.env.NEXT_PUBLIC_BACKEND_URL]}${ENDPOINT.API}`,
  headers,
});

const auth = axios.create({
  baseURL: `${[process.env.NEXT_PUBLIC_BACKEND_URL]}${ENDPOINT.AUTH}`,
  headers,
});

// export default api;
export { api, auth };
