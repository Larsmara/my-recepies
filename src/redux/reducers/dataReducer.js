import {
  LOADING_DATA,
  DELETE_RECIPE,
  POST_RECIPE,
  SET_RECIPE,
  SET_RECIPES,
  SET_FAVORITE,
  REMOVE_FAVORITE,
} from "../types";

const initialState = {
  recipes: [],
  recipe: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    case SET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };

    case SET_FAVORITE:
    case REMOVE_FAVORITE:
      let index = state.recipes.findIndex((recipe) => recipe.recipeId === action.payload);
      state.recipes[index] = action.payload;
      return {
        ...state,
      };

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.recipeId !== action.payload),
      };

    case POST_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
      };

    default:
      return state;
  }
};
