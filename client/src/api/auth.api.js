import axios from "axios";

const AUTH_URL = "http://localhost:8080/api/auth";

export const loginApi = async (email, password) => {
  const res = await axios.post(`${AUTH_URL}/login`, {
    email,
    password,
  });
  localStorage.setItem("token", res.data.token);
};

export const signupApi = async (name, email, password,role) => {
  const res = await axios.post(`${AUTH_URL}/register`, {
    name,
    email,
    password,
    role
  });
  localStorage.setItem("token", res.data.token);
};
