import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 5px 2px lightgray;
`;

export const Title = styled.h3`
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
