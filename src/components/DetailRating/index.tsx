import React, { useState, useEffect } from "react";
import {
  Wrapper,
  StarContainer,
  StarFilledWrapper,
  StarEmptyWrapper,
  Text,
  ThankYouText
} from "./styled";
import { StarFilled } from "@ant-design/icons";
import texts from "../../texts";
import { setRecipeRating } from "../../store/cookbook/actions";
import { connect } from "react-redux";
import ReduxTypes from "../../store/@types";
import {
  selectRatingInProgress,
  selectRecipesRated,
  selectRatingError
} from "../../store/selectors";
import RatingInProgressIndicator from "./RatingInProgressIndicator";
import RatingErrorIndicator from "./RatingErrorIndicator";

interface StateProps {
  ratingInProgress: boolean;
  recipesRated: string[];
  ratingError: boolean;
}

interface DispatchProps {
  setRecipeRating: typeof setRecipeRating;
}

interface Props extends StateProps, DispatchProps {
  recipeId: string;
  score: number;
}

const DetailRating = ({
  score,
  recipeId,
  setRecipeRating,
  ratingInProgress,
  recipesRated,
  ratingError
}: Props) => {
  const starsCount = Math.round(score);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [starHover, setStarHover] = useState<number>(starsCount);
  const [justRated, setJustRated] = useState<boolean>(false);

  const StarFilledComponent = () => (
    <StarFilledWrapper>
      <StarFilled />
    </StarFilledWrapper>
  );

  const StarEmptyComponent = () => (
    <StarEmptyWrapper>
      <StarFilled />
    </StarEmptyWrapper>
  );

  const hideThankYou = () => {
    setTimeout(()=>{setJustRated(false)},3000)
  }

  useEffect(()=>{
    if(!ratingInProgress && !ratingError && justRated){
      hideThankYou()
    }
  },[ratingInProgress])

  return (
    <Wrapper>
      {!ratingInProgress && !recipesRated.some(r => r === recipeId) && (
        <>
          <Text>{texts.rateThisRecipe}</Text>
          <StarContainer>
            {!isHovered &&
              [...Array(5)].map((a, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setStarHover(index + 1);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => {
                    setRecipeRating(recipeId, index + 1);
                    setJustRated(true);
                  }}
                >
                  {index < starsCount && <StarFilledComponent />}
                  {index >= starsCount && <StarEmptyComponent />}
                </div>
              ))}
            {isHovered &&
              [...Array(5)].map((a, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setStarHover(index + 1);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => {
                    setRecipeRating(recipeId, index + 1);
                    setJustRated(true);
                  }}
                >
                  {index < starHover && <StarFilledComponent />}
                  {index >= starHover && <StarEmptyComponent />}
                </div>
              ))}
          </StarContainer>
        </>
      )}
      {ratingInProgress && <RatingInProgressIndicator />}
      {ratingError && <RatingErrorIndicator />}
      {(justRated && !ratingInProgress && !ratingError) && <ThankYouText>{texts.thankYouForRating}</ThankYouText>}
    </Wrapper>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    ratingInProgress: selectRatingInProgress(state),
    recipesRated: selectRecipesRated(state),
    ratingError: selectRatingError(state)
  };
};

export default connect(mapStateToProps, { setRecipeRating })(DetailRating);
