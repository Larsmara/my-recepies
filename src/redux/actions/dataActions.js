import {
  LOADING_DATA,
  SET_RECIPE,
  SET_RECIPES,
  DELETE_RECIPE,
  POST_RECIPE,
  STOP_LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_FAVORITE,
  REMOVE_FAVORITE,
} from "../types";
import axios from "axios";

export const getScreams = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/recipes")
    .then((res) => {
      dispatch({ type: SET_RECIPES, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      /* HANDLE ERRORS */
    });
};

export const getRecipe = (recipeId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/recipes/${recipeId}`)
    .then((res) => {
      dispatch({ type: SET_RECIPE, payload: res.data });
    })
    .then(() => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postRecipe = (recipe) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/recipe", recipe)
    .then((res) => {
      dispatch({ type: POST_RECIPE, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    });
};

export const setFavorite = (recipeId) => (dispatch) => {
  axios
    .get(`/recipes/${recipeId}/favorite`)
    .then((res) => {
      console.log(res);
      dispatch({ type: SET_FAVORITE, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeFavorite = (recipeId) => (dispatch) => {
  axios
    .get(`/recipes/${recipeId}/unfavorite`)
    .then((res) => {
      console.log(res);
      dispatch({ type: REMOVE_FAVORITE, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteRecipe = (recipeId) => (dispatch) => {
  axios
    .delete(`/reccipe/${recipeId}`)
    .then(() => {
      dispatch({ type: DELETE_RECIPE, payload: recipeId });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
