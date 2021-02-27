import { useEffect } from 'react';

import {
    PokemonListBody,
    TotalOwned,
    Pokemon,
    PokemonImg,
    FillerContainer,
} from '../components/pokemon-list/pokemon-list.styles';

import {
    Nickname,
    PokemonName,
    RemoveButton
} from '../components/pokemon-list/my-pokemon-list.styles';

import { capitalizeFirst } from '../utils/functions.utlis';

import { useContext } from 'react';
import { MyPokemonContext } from '../components/context/my-pokemon.context'


//function to remove a pokemon
const RemovePokemon = (myPokemonList, setMyPokemonList, nickname) => {
    const list = myPokemonList.myPokemon.filter(pokemon => pokemon.nickname !== nickname);

    setMyPokemonList({
        myPokemon: list
    })
}

const MyPokemonList = () => {
    const { myPokemonList, setMyPokemonList } = useContext(MyPokemonContext);
        
    //store my pokemon to browser local storage everytime myPokemonList's value changes
    useEffect(() => {
        localStorage.setItem('myCachedPokemon', JSON.stringify(myPokemonList));
    }, [myPokemonList]);

    return (
        <div>
            <TotalOwned>Total Pokemon Owned: {myPokemonList.myPokemon.length}</TotalOwned>
            <PokemonListBody>
                {
                    //using index as key might not be performant efficient
                    myPokemonList.myPokemon.map(({nickname, pokemonName, url, index}) => (
                        <Pokemon key={index}>
                            <PokemonImg url={url} />
                            <Nickname>{nickname}</Nickname>
                            <PokemonName name={pokemonName} url={url}>{capitalizeFirst(pokemonName)}</PokemonName>
                            <RemoveButton onClick={() => RemovePokemon(myPokemonList, setMyPokemonList, nickname)}>Remove</RemoveButton>
                        </Pokemon>
                    ))
                }
                <Pokemon>
                    <FillerContainer/>
                    <FillerContainer/>
                    <FillerContainer/>
                </Pokemon>
            </PokemonListBody>
        </div>
    )
}

export default MyPokemonList;