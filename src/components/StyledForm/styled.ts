import styled from 'styled-components';
import { TextField } from "@material-ui/core";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`;

export const Heading = styled.h3`
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
`;

export const Separator = styled.div`
    margin-bottom: 30px;
`

export const StyledTextField = styled(TextField)`
  width: 100px;
`

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.accentLight};
  border: 2px solid ${({ theme }) => theme.colors.accentLight};
  border-radius: 5px;
  background: none;
  font-size: 18px;
  padding: 5px 5px;
  width: 100px;
  margin-bottom: 50px;
  cursor: pointer;
  :hover{
    background-color: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.8;
  }
`

export const StyledSubmit = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 5px;
  background: none;
  font-size: 18px;
  padding: 5px 5px;
  margin-top: 50px;
  cursor: pointer;
  :hover{
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.8;
  }
`
