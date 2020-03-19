import { watchGetRecipesAsync, watchGetRecipeDetailsAsync, watchSetRecipeRatingAsync, watchSendNewRecipeAsync } from "./cookbook/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetRecipesAsync(), watchGetRecipeDetailsAsync(), watchSetRecipeRatingAsync(), watchSendNewRecipeAsync()]);
}
