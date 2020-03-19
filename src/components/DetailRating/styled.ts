import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const Text = styled.p`
  margin: 0 0 20px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const StarFilledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0 5px;
  border: none;
  background: none;
  padding: 5px;
  color: ${({ theme }) => theme.colors.light};
`;

export const StarEmptyWrapper = styled(StarFilledWrapper)`
  opacity: 0.3;
`;

export const ThankYouText = styled.p`
  margin: auto;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};
`;
