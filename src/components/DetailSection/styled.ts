import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 20px 0 20px;
`;

export const Heading = styled.h3`
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  margin: 0 0 20px 0;
`;

export const IngredientsList = styled.ul``;

export const Ingredient = styled.li``;
