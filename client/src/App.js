import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import SearchNews from "./components/SearchNews";
import TopNews from "./components/TopNews";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Navbar action={this.handler}></Navbar>
            <br></br>
            <br></br>
            <Route exact path="/" component={TopNews}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/search" component={SearchNews}></Route>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
