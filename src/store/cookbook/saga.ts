import { put, takeLatest } from "redux-saga/effects";
import { CookbookActions } from "./actions";
import { endpoint } from "../../constants";

function* getRecipesAsync() {
  try {
    const recipes = yield fetch(
      `${endpoint}/recipes?limit=30&offset=0`,
      {}
    ).then(res => res.json());
    yield put({
      type: CookbookActions.GET_RECIPES_SUCCESS,
      payload: recipes.reverse()
    });
  } catch (err) {
    console.error(err);
    yield put({ type: CookbookActions.GET_RECIPES_FAILURE });
  }
}

export function* watchGetRecipesAsync() {
  yield takeLatest(CookbookActions.GET_RECIPES, getRecipesAsync);
}

function* getRecipeDetailsAsync(action) {
  try {
    const recipeDetails = yield fetch(
      `${endpoint}/recipes/${action.payload}`,
      {}
    ).then(res => res.json());
    yield put({
      type: CookbookActions.GET_RECIPE_DETAILS_SUCCESS,
      payload: recipeDetails
    });
  } catch (err) {
    console.error(err);
    yield put({ type: CookbookActions.GET_RECIPE_DETAILS_FAILURE });
  }
}

export function* watchGetRecipeDetailsAsync() {
  yield takeLatest(CookbookActions.GET_RECIPE_DETAILS, getRecipeDetailsAsync);
}

function* setRecipeRatingAsync(action) {
  try {
    const ratingData = yield fetch(
      `${endpoint}/recipes/${action.payload.id}/ratings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ score: action.payload.score })
      }
    ).then(res => res.json());
    yield put({
      type: CookbookActions.SET_RECIPE_RATING_SUCCESS,
      payload: ratingData
    });
  } catch (err) {
    console.error(err);
    yield put({ type: CookbookActions.SET_RECIPE_RATING_FAILURE });
  }
}

export function* watchSetRecipeRatingAsync() {
  yield takeLatest(CookbookActions.SET_RECIPE_RATING, setRecipeRatingAsync);
}

function* sendNewRecipeAsync(action) {
  try {
    const newRecipeData = yield fetch(`${endpoint}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: action.payload.name,
        description: action.payload.description,
        ingredients: action.payload.ingredients,
        duration: action.payload.duration,
        info: action.payload.info
      })
    }).then(res => res.json());
    if (newRecipeData.err) {
      console.log(newRecipeData.message);
      yield put({
        type: CookbookActions.SEND_NEW_RECIPE_FAILURE,
        payload: newRecipeData.message
      });
    } else {
      yield put({
        type: CookbookActions.SEND_NEW_RECIPE_SUCCESS,
        payload: newRecipeData
      });
    }
  } catch (err) {
    console.error(err);
    yield put({ type: CookbookActions.SEND_NEW_RECIPE_FAILURE });
  }
}

export function* watchSendNewRecipeAsync() {
  yield takeLatest(CookbookActions.SEND_NEW_RECIPE, sendNewRecipeAsync);
}
