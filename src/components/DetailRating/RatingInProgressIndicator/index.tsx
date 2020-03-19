import React from 'react';
import { Wrapper } from './styled';
import { LoadingOutlined } from "@ant-design/icons";

interface Props {
}

const RatingInProgressIndicator = (props: Props) => {
    return <Wrapper><LoadingOutlined /></Wrapper>;
};

export default RatingInProgressIndicator;
