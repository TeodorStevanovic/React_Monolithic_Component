import React from "react";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({ articles, toggleArticle, removeArticle }) => {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          toggleArticle={toggleArticle}
          removeArticle={removeArticle}
        />
      ))}
    </ul>
  );
};

export default ArticlesList;
