import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 5px 2px lightgray;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Title = styled.h1`
  margin: 0 20px;
  font-size: 20px;
`;

export const IconWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  width: 64px;
  height: 100%;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
  cursor: pointer;
`
