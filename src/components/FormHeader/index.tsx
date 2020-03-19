import React from "react";
import {
  Wrapper,
  IconWrapper,
  Title,
  TitleWrapper,
  ButtonWrapper
} from "./styled";
import { routes } from "../../constants";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import texts from "../../texts";
import { FormHeaderContainer } from "../GlobalContainer/styled";

interface Props {}

const FormHeader = ({}: Props) => {
  return (
    <Wrapper>
      <FormHeaderContainer>
        <IconWrapper to={routes.home}>
          <ArrowLeftOutlined />
        </IconWrapper>
        <TitleWrapper>
          <Title>{texts.addRecipe}</Title>
        </TitleWrapper>
      </FormHeaderContainer>
    </Wrapper>
  );
};

export default FormHeader;
