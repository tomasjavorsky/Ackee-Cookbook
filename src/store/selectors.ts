import ReduxTypes from "./@types";

export const selectRecipes = (state: ReduxTypes) => state.cookbookReducer.recipes;
export const selectRecipeDetails = (state: ReduxTypes) => state.cookbookReducer.recipeDetails;
export const selectLoading = (state: ReduxTypes) => state.cookbookReducer.loading;
export const selectLoadingError = (state: ReduxTypes) => state.cookbookReducer.loadingError;
export const selectRatingInProgress = (state: ReduxTypes) => state.cookbookReducer.ratingInProgress;
export const selectRecipesRated = (state: ReduxTypes) => state.cookbookReducer.recipesRated;
export const selectRatingError = (state: ReduxTypes) => state.cookbookReducer.ratingError;
export const selectSendingRecipe = (state: ReduxTypes) => state.cookbookReducer.sendingRecipe;
export const selectRecipeSent = (state: ReduxTypes) => state.cookbookReducer.recipeSent;
export const selectSendingRecipeError = (state: ReduxTypes) => state.cookbookReducer.sendingRecipeError;
export const selectSendingRecipeErrorMessage = (state: ReduxTypes) => state.cookbookReducer.sendingRecipeErrorMessage;

