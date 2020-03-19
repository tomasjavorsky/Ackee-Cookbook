import React, { useEffect } from "react";
import { useParams } from "react-router";
import DetailHeader from "../../components/DetailHeader";
import DetailSection from "../../components/DetailSection";
import DetailRating from "../../components/DetailRating";
import ReduxTypes, { RecipeDetails } from "../../store/@types";
import {
  selectRecipeDetails,
  selectLoading,
  selectLoadingError
} from "../../store/selectors";
import { connect } from "react-redux";
import { getRecipeDetails } from "../../store/cookbook/actions";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadingErrorIndicator from "../../components/LoadingErrorIndicator";
import { GlobalContainer } from "../../components/GlobalContainer/styled";

interface StateProps {
  recipeDetails: RecipeDetails;
  loading: boolean;
  loadingError: boolean;
}

interface DispatchProps {
  getRecipeDetails: typeof getRecipeDetails;
}

interface Props extends StateProps, DispatchProps {}

const RecipeDetail = ({
  recipeDetails,
  getRecipeDetails,
  loading,
  loadingError
}: Props) => {
  const { id } = useParams();

  useEffect(() => {
    getRecipeDetails(id);
  }, [getRecipeDetails, id]);

  return (
    <GlobalContainer>
      {loading && <LoadingIndicator />}
      {loadingError && <LoadingErrorIndicator />}
      {recipeDetails && (
        <>
          <DetailHeader
            score={recipeDetails.score}
            name={recipeDetails.name}
            duration={recipeDetails.duration}
          />
          <DetailSection
            info={recipeDetails.info}
            ingredients={recipeDetails.ingredients}
            description={recipeDetails.description}
          />
          <DetailRating recipeId={id} score={recipeDetails.score} />
        </>
      )}
    </GlobalContainer>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    recipeDetails: selectRecipeDetails(state),
    loading: selectLoading(state),
    loadingError: selectLoadingError(state)
  };
};

export default connect(mapStateToProps, { getRecipeDetails })(RecipeDetail);
