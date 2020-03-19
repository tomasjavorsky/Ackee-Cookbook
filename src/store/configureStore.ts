import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import cookbookReducer from "./cookbook/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";
import { CookieStorage } from "redux-persist-cookie-storage";
import { persistReducer, persistStore } from "redux-persist";
import Cookies from "cookies-js";

const cookbookPersistConfig = {
  key: "cookbookReducer",
  storage: new CookieStorage(Cookies),
  whitelist: ['recipesRated']
};

const rootReducer = combineReducers({
  cookbookReducer: persistReducer(cookbookPersistConfig, cookbookReducer)
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)
export default store;
