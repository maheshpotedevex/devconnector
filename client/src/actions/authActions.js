import axios from "axios";
import { GET_ERRORS } from "./types";
import setAuthToken from "../utils/setAuthToken";

//1. Action: Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("./login"))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//2. New Action for Login - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to local storage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
