import { CookbookActions } from "./actions";

const initialState = {
  recipes: undefined,
  recipeDetail: undefined,
  loading: false,
  loadingError: false,
  ratingInProgress: false,
  recipesRated: [],
  ratingError: false,
  sendingRecipe: false,
  recipeSent: false,
  sendingRecipeError: false,
  sendingRecipeErrorMessage: undefined
};

const cookbookReducer = (state = initialState, action) => {
  switch (action.type) {
    //list of recipes
    case CookbookActions.GET_RECIPES:
      return { ...state, loading: true };
    case CookbookActions.GET_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload, loading: false };
    case CookbookActions.GET_RECIPES_FAILURE:
      return { ...state, loading: false, loadingError: true };

    //recipe detail
    case CookbookActions.GET_RECIPE_DETAILS:
      return { ...state, loading: true };
    case CookbookActions.GET_RECIPE_DETAILS_SUCCESS:
      return { ...state, recipeDetails: action.payload, loading: false };
    case CookbookActions.GET_RECIPE_DETAILS_FAILURE:
      return { ...state, loading: false, loadingError: true };

    //recipe rating
    case CookbookActions.SET_RECIPE_RATING:
      return { ...state, ratingInProgress: true };
    case CookbookActions.SET_RECIPE_RATING_SUCCESS:
      return {
        ...state,
        ratingInProgress: false,
        recipesRated: [...state.recipesRated, action.payload.recipe]
      };
    case CookbookActions.SET_RECIPE_RATING_FAILURE:
      return { ...state, ratingInProgress: false, ratingError: true };

    //sending new recipe
    case CookbookActions.SEND_NEW_RECIPE:
      return { ...state, sendingRecipe: true, recipeSent: false, sendingRecipeError: false, sendingRecipeErrorMessage: "" };
    case CookbookActions.SEND_NEW_RECIPE_SUCCESS:
      return { ...state, sendingRecipe: false, recipeSent: true, sendingRecipeError: false };
    case CookbookActions.SEND_NEW_RECIPE_FAILURE:
      return { ...state, sendingRecipe: false, sendingRecipeError: true, sendingRecipeErrorMessage: action.payload };

    default:
      return state;
  }
};

export default cookbookReducer;
