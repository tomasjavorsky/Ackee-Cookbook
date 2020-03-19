import React from "react";
import { Wrapper, ErrorText } from "./styled";
import { FrownOutlined } from "@ant-design/icons";
import texts from "../../texts";

interface Props {}

const LoadingErrorIndicator = (props: Props) => {
  return (
    <Wrapper>
      <FrownOutlined />
      <ErrorText>{texts.couldNotRetrieveData}</ErrorText>
    </Wrapper>
  );
};

export default LoadingErrorIndicator;
