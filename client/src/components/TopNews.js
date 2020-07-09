import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewsItem from "./NewsItem";

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
  state = {
    country: "us",
  };
  render() {
    return (
      <Fragment>
        <Query
          query={TOP_NEWS_QUERY}
          variables={{
            country: this.state.country,
          }}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              );
            if (error) console.log(error);
            console.log(data);

            return (
              <div>
                <br></br>
                <h3>Select country:</h3>
                <br></br>
                <div>
                  <select
                    class="form-control"
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
                <div class="card-deck">
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
