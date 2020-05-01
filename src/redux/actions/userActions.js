import {
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_USER,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationheader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((error) => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data,
      });
    });
};

export const signupUser = (userData, history) => (dispatch) => {
  console.log("signup");
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", userData)
    .then((res) => {
      setAuthorizationheader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((error) => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user/image", formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editUserDetails = (userData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userData)
    .then(() => {
      dispatch(getUserData);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const setAuthorizationheader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
