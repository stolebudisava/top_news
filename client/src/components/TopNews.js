import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";

const TOP_NEWS_QUERY = gql`
  query TopNewsQuery($country: String!) {
    top_news(country: $country) {
      title
      urlToImage
      description
      url
    }
  }
`;

export default class TopNews extends Component {
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
      <Fragment>
        <Navbar action={this.handler}></Navbar>
        <Query
          query={TOP_NEWS_QUERY}
          variables={{
            country: this.state.country,
          }}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              );
            if (error) console.log(error);

            return (
              <div>
                <br></br>
                <h3>Select country:</h3>
                <br></br>
                <div>
                  <select
                    className="form-control"
                    id="countrySelect"
                    value={this.state.country}
                    onChange={(event) =>
                      this.setState({ country: event.target.value })
                    }
                  >
                    <option value="us">United States</option>
                    <option value="gb">Great Britain</option>
                    <option value="rs">Serbia</option>
                    <option value="ru">Russia</option>
                  </select>
                </div>
                <br></br>
                <h3>
                  Top news from
                  {" " + this.state.country.toUpperCase()}:
                </h3>
                <br></br>
                <div className="card-deck">
                  {data.top_news.map((news_item) => (
                    <NewsItem
                      key={news_item.title}
                      news_item={news_item}
                    ></NewsItem>
                  ))}
                </div>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
