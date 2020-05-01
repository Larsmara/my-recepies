import {
  LOADING_DATA,
  DELETE_RECIPE,
  POST_RECIPE,
  SET_RECIPE,
  SET_RECIPES,
  SET_FAVORITE,
  REMOVE_FAVORITE,
} from "../types";

const recipes = [
  {
    name: "Paella 1",
    calories: 24,
    carbs: 19,
    createdAt: "2020-04-27T06:55:08.667Z",
    description: "This food is amazing! A must try!!",
    fat: 16,
    protein: 24,
    username: "lars",
    recipeId: "DpA6dxPxNG7Nx1ddReDb",
    favorite: true,
    ingredients: ["flour", "sugar", "egg whites", "PB2", "Protein powder"],
  },
  {
    name: "Paella 2",
    calories: 24,
    carbs: 19,
    createdAt: "2020-04-27T06:55:08.667Z",
    description: "This food is amazing! A must try!!",
    fat: 16,
    protein: 24,
    username: "lars",
    recipeId: "DpA6dxPxNG7Nx1ddReDb",
    favorite: false,
    ingredients: ["flour", "sugar", "egg whites", "PB2", "Protein powder"],
  },
  {
    name: "Paella 3",
    calories: 24,
    carbs: 19,
    createdAt: "2020-04-27T06:55:08.667Z",
    description: "This food is amazing! A must try!!",
    fat: 16,
    protein: 24,
    username: "lars",
    recipeId: "DpA6dxPxNG7Nx1ddReDb",
    favorite: false,
    ingredients: ["flour", "sugar", "egg whites", "PB2", "Protein powder"],
  },
  {
    name: "Paella 4",
    calories: 24,
    carbs: 19,
    createdAt: "2020-04-27T06:55:08.667Z",
    description: "This food is amazing! A must try!!",
    fat: 16,
    protein: 24,
    username: "lars",
    recipeId: "DpA6dxPxNG7Nx1ddReDb",
    favorite: true,
    ingredients: ["flour", "sugar", "egg whites", "PB2", "Protein powder"],
  },
];

const initialState = {
  recipes: [...recipes],
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
