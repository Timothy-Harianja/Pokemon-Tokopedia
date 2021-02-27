import React, { useReducer, useState } from 'react';

//this is the state initialization for my pokemon state
//We will utilize useContext to make it global

const initialState = {
    myPokemon: []
};

const localState = JSON.parse(localStorage.getItem("myCachedPokemon"));

const MyPokemonContext = React.createContext();

const MyPokemonProvider = (props) => {
    const [myPokemonList, setMyPokemonList] = useState(localState || initialState);

    return (
        <MyPokemonContext.Provider value={{ myPokemonList, setMyPokemonList }}>
            {props.children}
        </MyPokemonContext.Provider>
    );
}

export { MyPokemonContext, MyPokemonProvider };