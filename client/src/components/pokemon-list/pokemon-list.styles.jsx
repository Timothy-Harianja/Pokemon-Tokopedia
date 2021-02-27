import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonListBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    padding: 20px;
    width: 80%;
    height: auto;
`;

export const TotalOwned = styled.div`
    font-size: 48px;
    margin-bottom: 30px;
`

export const Pokemon = styled.div`
    flex-wrap: 25%;
    width: 250px;
    margin-bottom: 70px;
`;

export const PokemonImg = styled.image`
    display: block;
    content: url('${props => props.url}');
    height: 200px;
    max-width: 100%;
    margin: auto;
`

export const PokemonName = styled(Link).attrs(props => ({
    to: {
        pathname: '/Detail',
        search: `name=${props.name}&url=${props.url}`
    }
}))`
    display: block;
    font-size: 30px;
`;



export const FillerContainer = styled.div`
    width: 250px;
    height: 0;
`;

export const ErrorMessage = styled.div`
    font-size: 40px;
    width: 50%;
    margin: 200px auto 0 auto;
`