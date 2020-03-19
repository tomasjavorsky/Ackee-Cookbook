import React from "react";
import { Wrapper, Title, IconWrapper } from "./styled";
import texts from "../../texts";
import { PlusOutlined } from "@ant-design/icons";
import { routes } from "../../constants";
import { ListHeaderContainer } from "../GlobalContainer/styled";

interface Props {}

const ListHeader = (props: Props) => {
  return (
    <Wrapper>
      <ListHeaderContainer>
        <Title>{texts.recipes}</Title>
        <IconWrapper to={routes.newRecipe}>
          <PlusOutlined />
        </IconWrapper>
      </ListHeaderContainer>
    </Wrapper>
  );
};

export default ListHeader;
