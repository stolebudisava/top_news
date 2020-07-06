import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewsItem from "./NewsItem";

const TOP_NEWS_QUERY = gql`
  query TopNewsQuery {
    top_news {
      title
      urlToImage
      description
      url
    }
  }
`;

export class TopNews extends Component {
  render() {
    return (
      <Fragment>
        <h2>Top news from US:</h2>

        <Query query={TOP_NEWS_QUERY}>
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
            //console.log(data);

            return (
              <div class="card-deck">
                {data.top_news.map((news_item) => (
                  <NewsItem
                    key={news_item.title}
                    news_item={news_item}
                  ></NewsItem>
                ))}
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default TopNews;
