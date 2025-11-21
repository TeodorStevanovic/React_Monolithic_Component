import React from "react";

const ArticlesList = ({ articles, toggleArticle, removeArticle }) => {
  return (
    <ul>
      {articles.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            title="Toggle Summary"
            onClick={() => toggleArticle(i.id)}
          >
            {i.title}
          </a>
          &nbsp;
          <a
            href={`#${i.id}`}
            title="Remove"
            onClick={() => removeArticle(i.id)}
          >
            &#10007;
          </a>
          <p style={{ display: i.display }}>{i.summary}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
