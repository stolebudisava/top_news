import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchNews extends Component {
  render() {
    return (
      <Link to="/" className="btn btn-secondary my-2 my-sm-0">
        Back to top news
      </Link>
    );
  }
}
