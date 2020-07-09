import React from "react";

export default function NewsItem({
  news_item: { title, urlToImage, description, url },
}) {
  return (
    <div>
      <div className="card border-primary mb-3 news_card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img className="card-img-top" src={urlToImage} alt="Newsimage"></img>
          <p className="card-text">{description}</p>
          <a
            href={url}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            More >
          </a>
        </div>
      </div>
    </div>
  );
}
