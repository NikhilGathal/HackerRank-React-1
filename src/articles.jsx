import React from "react";
import "./App.css";
const Articles = ({ articles }) => {
  return (
    <div className="articles-container">
      <table className="articles-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
