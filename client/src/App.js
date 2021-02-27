import './App.css';

import React, { lazy, Suspense } from 'react';

import { MyPokemonProvider } from './components/context/my-pokemon.context';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
//Utilizing lazy loading so that corresponding components
//are loaded only when needed
const DetailPage = lazy(() => import('./pages/detail-page.page'));
const PokemonListPage = lazy(() => import('./pages/pokemon-list.page'));
const MyPokemonList = lazy(() => import('./pages/my-pokemon.page'));

const httpLink = createHttpLink({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
});

//Allows our app to query to a GraphQL site
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <MyPokemonProvider>
      <ApolloProvider client={client} >
        <div className="App">
            <Header/>
              <ErrorBoundary>
                <Suspense fallback={<Spinner/>}>
                  <Switch>
                    <Route exact path='/myPokemon' component={MyPokemonList}/>
                    <Route exact path='/' component={PokemonListPage}/>
                    <Route path='/Detail' component={DetailPage}/>
                    <Redirect to="/" />
                  </Switch>
                </Suspense>
              </ErrorBoundary>
        </div>
      </ApolloProvider>
    </MyPokemonProvider>

  );
}

export default App;
