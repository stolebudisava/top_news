import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Navbar from "./components/Navbar";
import MoreDetails from "./components/MoreDetails";
import TopNews from "./components/TopNews";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Navbar></Navbar>

          <Route exact path="/" component={TopNews}></Route>
          <Route
            exact
            path="/moreDetails/:title"
            component={MoreDetails}
          ></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
