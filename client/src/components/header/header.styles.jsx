import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    margin-bottom: 45px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 17%;

    @media screen and (max-width: 800px) {
        margin: 0 auto 0 auto;
    }
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: black;
`