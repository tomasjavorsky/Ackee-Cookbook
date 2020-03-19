import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.accentLight};
`;

export const ErrorText = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;
