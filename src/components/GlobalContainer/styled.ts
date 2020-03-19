import styled from "styled-components";

export const GlobalContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.sm}px;
  @media screen and (min-width: ${({ theme }) => theme.layout.sm}px) {
  }
`;

export const FormHeaderContainer = styled(GlobalContainer)`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.layout.sm}px;
`;

export const ListHeaderContainer = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.layout.sm}px;
`;
