export interface CookbookReducer {
    recipes: RecipeListItem[],
    recipeDetails: RecipeDetails,
    loading: boolean,
    loadingError: boolean,
    ratingInProgress: boolean,
    recipesRated: string[],
    ratingError: boolean,
    sendingRecipe: boolean,
    sendingRecipeError: boolean,
    recipeSent: boolean,
    sendingRecipeErrorMessage: string,
}

export interface RecipeListItem {
    name: string,
    duration: number,
    id: string,
    score: number
}

export interface RecipeDetails{
    name: string,
    description: string,
    duration: number,
    ingredients: string[],
    info: string,
    id: string,
    score: number,
}

interface ReduxTypes {
    cookbookReducer: CookbookReducer
}

export default ReduxTypes;