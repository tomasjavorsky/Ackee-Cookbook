import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  font-size: 64px;
  color: ${({ theme }) => theme.colors.accentLight};
`;

export const ErrorText = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
