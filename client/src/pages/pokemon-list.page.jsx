import {
    PokemonListBody,
    TotalOwned,
    Pokemon,
    PokemonImg,
    PokemonName,
    FillerContainer,
    ErrorMessage
} from '../components/pokemon-list/pokemon-list.styles';

import { capitalizeFirst } from '../utils/functions.utlis';

import Spinner from '../components/spinner/spinner.component';

//if user scrolls passed a waypoint component, then we can trigger an event.
//In this case, we fetchMore pokemons
import { Waypoint } from "react-waypoint";

import { useContext } from 'react';
import { MyPokemonContext } from '../components/context/my-pokemon.context'

import { useQuery } from 'react-apollo';
import { GET_POKEMONS } from '../graphql/pokemon-query';

const PokemonListPage = () => {
    const { myPokemonList } = useContext(MyPokemonContext);

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: { offset: 0, limit: 20 }
    });

    if (loading) return <Spinner/>
    if (error) return <ErrorMessage>Failed in retrieving data or try accessing specific pokemon through the main page</ErrorMessage>;

    //fetching more pokemon with a new graphQL query and combine it with the previous query
    const fetchMorePokemon = () => {
        fetchMore({
            variables: {
                offset: data.pokemons.results.length
            },
            updateQuery : (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                return {
                    pokemons: {
                        __typename: "PokemonResponse",
                        results: [...prev.pokemons.results, ...fetchMoreResult.pokemons.results]
                    }
                }

            }
        })
    }

    return (
        <div>
            <TotalOwned>Total Pokemon Owned: {myPokemonList.myPokemon.length}</TotalOwned>
            <PokemonListBody>
                {
                    //using index as key might not be performant efficient
                    data.pokemons.results.map(({name, image, index}) => (
                        <Pokemon key={index}>
                            <PokemonImg url={image} />
                            <PokemonName name={name} url={image}>{capitalizeFirst(name)}</PokemonName>
                        </Pokemon>
                    ))
                }
                <Waypoint onEnter={() => fetchMorePokemon()}/>
                <Pokemon>
                    <FillerContainer/>
                    <FillerContainer/>
                    <FillerContainer/>
                </Pokemon>
            </PokemonListBody>
        </div>
    )
}

export default PokemonListPage;