import React from "react";
import { Wrapper, ErrorText } from "./styled";
import { FrownOutlined } from "@ant-design/icons";
import texts from "../../../texts";

interface Props {}

const RatingErrorIndicator = (props: Props) => {
  return (
    <Wrapper>
      <FrownOutlined />
      <ErrorText>{texts.couldNotSendRating}</ErrorText>
    </Wrapper>
  );
};

export default RatingErrorIndicator;
