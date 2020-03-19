import React from "react";
import {
  Wrapper,
  FoodImage,
  DescriptionContainer,
  FoodHeader,
  RatingWrapper,
  StarWrapper,
  DurationWrapper,
  DurationText
} from "./styled";
import pizza from "../../images/ackeeFood.png";
import { StarFilled, ClockCircleOutlined } from "@ant-design/icons";
import { routes } from "../../constants";

interface Props {
  name: string;
  score: number;
  duration: number;
  id: string;
}

const RecipeSmall = ({ name, score, duration, id }: Props) => {
  const starsCount = Math.round(score);

  return (
    <Wrapper to={`${routes.recipe}/${id}`}>
      <FoodImage src={pizza} alt={"pizza"} />
      <DescriptionContainer>
        <FoodHeader>{name}</FoodHeader>
        <RatingWrapper>
          {[...Array(starsCount)].map((a, index) => (
            <StarWrapper key={index}>
              <StarFilled />
            </StarWrapper>
          ))}
        </RatingWrapper>
        <DurationWrapper>
          <ClockCircleOutlined />
          <DurationText>{`${duration} min.`}</DurationText>
        </DurationWrapper>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default RecipeSmall;
