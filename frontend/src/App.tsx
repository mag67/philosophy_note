import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query GetRates {
          hello
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
