import React from "react";

const ArticleItem = ({ article, toggleArticle, removeArticle }) => {
  return (
    <li key={article.id}>
      <a
        href={`#${article.id}`}
        title="Toggle Summary"
        onClick={() => toggleArticle(article.id)}
      >
        {article.title}
      </a>
      &nbsp;
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={() => removeArticle(article.id)}
      >
        &#10007;
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
};

export default ArticleItem;
