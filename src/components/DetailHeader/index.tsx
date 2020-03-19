import React from "react";
import {
  HeaderWrapper,
  IconWrapper,
  ImageBackground,
  RecipeName,
  RatingAndTimeWrapper,
  StarsContainer,
  StarWrapper,
  TimeContainer,
  DurationText,
  TimeIconWrapper
} from "./styled";
import {
  PlusOutlined,
  ArrowLeftOutlined,
  StarFilled,
  ClockCircleOutlined
} from "@ant-design/icons";
import { routes } from "../../constants";

interface Props {
  name: string;
  score: number;
  duration: number;
}

const DetailHeader = ({ name, score, duration }: Props) => {
  const starsCount = Math.round(score);
  return (
    <>
      <ImageBackground>
        <HeaderWrapper>
          <IconWrapper to={routes.home}>
            <ArrowLeftOutlined />
          </IconWrapper>
          <IconWrapper to={routes.newRecipe}>
            <PlusOutlined />
          </IconWrapper>
        </HeaderWrapper>
        <RecipeName>{name}</RecipeName>
      </ImageBackground>
      <RatingAndTimeWrapper>
        <StarsContainer>
          {[...Array(starsCount)].map((a, index) => (
            <StarWrapper key={index}>
              <StarFilled />
            </StarWrapper>
          ))}
        </StarsContainer>
        <TimeContainer>
          <TimeIconWrapper>
            <ClockCircleOutlined />
          </TimeIconWrapper>
          <DurationText>{`${duration} min.`}</DurationText>
        </TimeContainer>
      </RatingAndTimeWrapper>
    </>
  );
};

export default DetailHeader;
