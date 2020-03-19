import React from "react";
import ListOfRecipes from "./pages/ListOfRecipes";
import { ThemeProvider } from "styled-components";
import theme from "./constants/globalTheme";
import store, { persistor } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./constants";
import RecipeDetail from "./pages/RecipeDetail";
import LoadingIndicator from "./components/LoadingIndicator";
import { PersistGate } from "redux-persist/integration/react";
import NewRecipeForm from "./pages/NewRecipeForm";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path={routes.home} component={ListOfRecipes} />
              <Route
                exact
                path={`${routes.recipe}/:id`}
                component={RecipeDetail}
              />
              <Route exact path={routes.newRecipe} component={NewRecipeForm} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
