import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem({
  news_item: { title, urlToImage, description, url },
}) {
  return (
    <div>
      <div class="card border-primary mb-3 news_card">
        <div class="card-header">{title}</div>
        <div class="card-body">
          <img class="card-img-top" src={urlToImage} alt="Card image cap"></img>
          <p class="card-text">{description}</p>
          <Link to={`/moreDetails/${title}`} class="card-link">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
