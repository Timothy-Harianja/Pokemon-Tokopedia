import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonName = styled(Link).attrs(props => ({
    to: {
        pathname: '/Detail',
        search: `name=${props.name}&url=${props.url}`
    }
}))`
    display: block;
    font-size: 20px;
`;

export const Nickname = styled.div`
    font-size: 30px;
    margin-bottom: 5px;
`

export const RemoveButton = styled.button`
    width: 100px;
    height: 25px;
    margin-top: 20px;
    margin-bottom: 45px;
    font-size: 10px;
    font-weight: bold;
    border-style: none;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(to right, #FF0000 0%, #D00000 51%, #900000 100%);

    :hover {
        background-position: right center;
    }

    :focus {
        border: 2px solid black;
        outline: none;
    }
`