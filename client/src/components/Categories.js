import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const CATEGORIES_QUERY = gql`
  query CategoriesQuery(
    $country: String!
    $category: String!
    $pageSize: Int!
  ) {
    country_category(
      country: $country
      category: $category
      pageSize: $pageSize
    ) {
      title
      urlToImage
      description
    }
  }
`;

export class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      category: "entertainment",
    };
  }
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Query
          query={CATEGORIES_QUERY}
          variables={{
            country: this.state.country,
            category: this.state.category,
            pageSize: 5,
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
            //console.log(data);

            return (
              <div>
                <br></br>
                <h3>Select news category:</h3>
                <br></br>
                <div>
                  <select
                    className="form-control"
                    id="categorySelect"
                    value={this.state.category}
                    onChange={(event) =>
                      this.setState({ category: event.target.value })
                    }
                  >
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sport">Sport</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>
                <br></br>
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
                  Top 5 news from {this.state.category} category in
                  {" " + this.state.country.toUpperCase()}:
                </h3>
                <br></br>
                <div className="card-deck">
                  {data.country_category.map((news_item) => (
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

        <Link to="/" className="btn btn-secondary my-2 my-sm-0">
          Back to top news
        </Link>
      </Fragment>
    );
  }
}

export default Categories;
