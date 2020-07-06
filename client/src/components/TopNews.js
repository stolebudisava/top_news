import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const TOP_NEWS_QUERY = gql`
  query TopNewsQuery {
    top_news {
      title
      urlToImage
      description
    }
  }
`;

export class TopNews extends Component {
  render() {
    return (
      <div className="container">
        <h2>Top news from US:</h2>
        <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h4 class="card-title">Primary card title</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNews;
