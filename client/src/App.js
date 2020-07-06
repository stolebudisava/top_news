import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <Navbar></Navbar>
        <TopNews></TopNews>
      </ApolloProvider>
    </div>
  );
}

export default App;
