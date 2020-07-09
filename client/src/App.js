import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Categories from "./components/Categories";
import SearchNews from "./components/SearchNews";
import TopNews from "./components/TopNews";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      country: "us",
    };
  }

  handler() {
    if (this.state.country === "us") {
      this.setState({
        country: "gb",
      });
    } else {
      this.setState({
        country: "us",
      });
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
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
