export enum CookbookActions {
  GET_RECIPES = "cookbook/GET_RECIPES",
  GET_RECIPES_SUCCESS = "cookbook/GET_RECIPES_SUCCESS",
  GET_RECIPES_FAILURE = "cookbook/GET_RECIPES_FAILURE",
  GET_RECIPE_DETAILS = "cookbook/GET_RECIPE_DETAILS",
  GET_RECIPE_DETAILS_SUCCESS = "cookbook/GET_RECIPE_DETAILS_SUCCESS",
  GET_RECIPE_DETAILS_FAILURE = "cookbook/GET_RECIPE_DETAILS_FAILURE",
  SET_RECIPE_RATING = "cookbook/SET_RECIPE_RATING",
  SET_RECIPE_RATING_SUCCESS = "cookbook/SET_RECIPE_RATING_SUCCESS",
  SET_RECIPE_RATING_FAILURE = "cookbook/SET_RECIPE_RATING_FAILURE",
  SEND_NEW_RECIPE = "cookbook/SEND_NEW_RECIPE",
  SEND_NEW_RECIPE_SUCCESS = "cookbook/SEND_NEW_RECIPE_SUCCESS",
  SEND_NEW_RECIPE_FAILURE = "cookbook/SEND_NEW_RECIPE_FAILURE",
}

export const getRecipes = () => ({
  type: CookbookActions.GET_RECIPES
});

export const getRecipeDetails = (recipeId: string) => ({
  type: CookbookActions.GET_RECIPE_DETAILS,
  payload: recipeId
});

export const setRecipeRating = (id: string, score: number) => ({
  type: CookbookActions.SET_RECIPE_RATING,
  payload: {
    id,
    score
  }
});

export const sendNewRecipe = (name: string, description: string, ingredients: string[], duration: number, info: string) => ({
  type: CookbookActions.SEND_NEW_RECIPE,
  payload: {
    name,
    description,
    ingredients,
    duration,
    info
  }
});
