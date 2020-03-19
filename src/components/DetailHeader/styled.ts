import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../images/ackeeFoodBg.png";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
`;

export const IconWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
`;

export const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${img});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RecipeName = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  margin: 0 0 20px 20px;
  font-size: 20px;
`;

export const RatingAndTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.accentLight};
  width: 100%;
  height: 64px;
`;

export const StarsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  height: 100%;
  align-items: center;
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.light};
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`;

export const TimeIconWrapper = styled.div`
  font-size: 20px;
`;

export const DurationText = styled.p`
  align-self: center;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light};
  margin: 0 20px;
`;
