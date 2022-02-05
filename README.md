# Corinth-Code-Challenge
This project is a solution to the Corinth Code Challenge from Lifeway. The project requirements can be found:
https://github.com/LifewayIT/corinth-code-challenge.

## About This Solution

The frontend is build using Angular and the backend is built using Typescript. This solution provides a backend "Gateway API" that proxies all calls to the SWAPI API.

## Features

The frontend features a search bar that brings back search results as the user types in a character's name. The search bar is built implementing a debounce feature and logic to ensure that search results only match the current text of the query.

Once a character is selected, additional queries are made to return details about homeworld, starships and movie appearances.
