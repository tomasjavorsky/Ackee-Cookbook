import React, { useEffect } from "react";
import ListHeader from "../../components/ListHeader";
import ReduxTypes, { RecipeListItem } from "../../store/@types";
import {
  selectRecipes,
  selectLoading,
  selectLoadingError
} from "../../store/selectors";
import { connect } from "react-redux";
import { getRecipes } from "../../store/cookbook/actions";
import RecipeSmall from "../../components/RecipeSmall";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadingErrorIndicator from "../../components/LoadingErrorIndicator";
import { GlobalContainer } from "../../components/GlobalContainer/styled";

interface StateProps {
  recipes: RecipeListItem[];
  loading: boolean;
  loadingError: boolean;
}

interface DispatchProps {
  getRecipes: typeof getRecipes;
}

interface Props extends StateProps, DispatchProps {}

const ListOfRecipes = ({
  recipes,
  getRecipes,
  loading,
  loadingError
}: Props) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <>
      <ListHeader />
      <GlobalContainer>
        {loading && <LoadingIndicator />}
        {loadingError && <LoadingErrorIndicator />}
        {recipes?.map((recipe, index) => (
          <RecipeSmall
            key={index}
            name={recipe.name}
            score={recipe.score}
            duration={recipe.duration}
            id={recipe.id}
          />
        ))}
      </GlobalContainer>
    </>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    recipes: selectRecipes(state),
    loading: selectLoading(state),
    loadingError: selectLoadingError(state)
  };
};

export default connect(mapStateToProps, { getRecipes })(ListOfRecipes);
