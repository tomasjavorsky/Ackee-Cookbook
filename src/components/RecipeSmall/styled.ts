import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
    display: flex;
    align-items: center;
    width: calc(100% - 20px);
    height: 200px;
    border: none;
    background: none;
    border-bottom: 1px solid lightgrey;
    margin-left: 20px;
    text-decoration: none;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const FoodImage = styled.img`
    width: 150px;
    min-width: 150px;
    height: auto;
    object-fit: contain;
    border-radius: 10%;
    margin-right: 20px;
`

export const FoodHeader = styled.h4`
    color: ${({ theme }) => theme.colors.accent};
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0 10px 0;
`

export const RatingWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
`

export const StarWrapper = styled.div`
    color: ${({ theme }) => theme.colors.accentLight};
`

export const DurationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const DurationText = styled.p`
    font-size: 18px;
    margin: 0 0 0 5px;
`

