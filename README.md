# pokemon-tokopedia
Pokedex Project for Tokopedia's online assessment

You can access the project here: [Pokemon Tokopedia](https://pokemon-tokopedia.netlify.app)

NOTE: The app is currently deployed on Netlify. Netlify is mostly used for static pages. So the app is deployed without using the node-js server. However this git repo includes a server.js file in case that you want to deploy it with a server.

Below is the documentation on how to use the app, all the functionalities and the file structure.

## How to use
The link above will bring you to the **main page** which contains all the pokemons.

On the header, you will see two links:
* **All Pokemons** = main page
* **My Pokemons** = Pokemon that you caught

How to catch pokemon?????

You can access specific pokemon by clicking any pokemon's name in the main page.
This will bring you to the Pokemon **Detail page**. You will see different information 
such as id, abilities, moves, height, weight etc.

**You can only access Detail Page by clicking pokemon's name in the main page**

There will be a 'Catch' button. You have **50% chance of catching it**. 

* Success = A form will appear to input the nickname (**You can't use the same nickname more than once**).
* Fail = A box with a message that you have failed.

That's it! Enjoy!

## Requirements

This section will cover all the requirements by Tokopedia

* This app contains 3 pages: **Pokemon List, Pokemon Detail, & My Pokemon List**.
* This app utilizes **GraphQL, Apollo Client & Provider** to retrieve data.
* The List page shows both pokemons' names and pictures. The **names are links** to the Pokemon Detail Page.
* The List page has **owned total at the top**.
* Pokemon Detail page contains information about the pokemon and **a button to catch (50% chance)**. 
* Each pokemon in My Pokemon List page has a **remove button** to remove the corresponding pokemon.
* My Pokemon List **persists** after hard refresh (uses browser **local storage**).
* This app performance is improved through the state structure and **Code Splitting (React Lazy and Suspense)**.
* Project code is in Github (this page) and deployed in **Netlify**.
* App utilizes **React Hooks and React Context to maintain My Pokemon List globally**. It also uses Hooks for state in general.
* App utilizes **styled-component** library to perform CSS-in-JS
* App is **SPA (due to react-router-dom) & PWA** (try downloading it!)


## Extra Functionalities

This section covers extra functionalities that I have added

* App utilizes **waypoint library for infinite-scrolling effect**. When user scrolls to the bottom of the page, the graphql fetches more pokemon.
* Flex CSS for mobile responsive.
* App **handles empty nickname and nickname** that contains whitespace before and after. "name" and "&nbsp; &nbsp; &nbsp; name &nbsp; &nbsp;" are considered as the same, thus can't be added.
* App handles when abilities or moves are **null**.
* App uses **spinner component** which is displayed when the app is loading (components/spinner)
* Created **ErrorBoundary** components that renders an image when the server is down.

## File Structure

I will use this section to cover the structure of the app

App Structure

* src
  - /components = all components that are used. We only used these components in pages.
  - /pages = all pages that the app displays. Pages are technically react components as well.
  - /graphql = graphql queries.
  - /utils = any extra util functions (ex: capitalize first letter).

files that ends with:
* *.styles.jsx = styled-components (CSS-in-JS).
* *.component.jsx = functional components that return a component.


