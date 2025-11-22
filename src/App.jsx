import { useState } from "react";
import ArticlesList from "./ArticlesList";
import AddArticle from "./AddArticle";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function ArticleManager() {
  const [articles, setArticles] = useState([
    {
      id: id.next().value,
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none",
    },
  ]);

  const clickAdd = () => {
    setArticles((articles) => [
      ...articles,
      {
        id: id.next().value,
        title: title,
        summary: summary,
        display: "none",
      },
    ]);

    setTitle("");
    setSummary("");
  };

  const removeArticle = (id) => {
    setArticles((articles) => articles.filter((article) => article.id !== id));
  };

  const toggleArticle = (id) => {
    setArticles((articles) =>
      articles.map((article) =>
        article.id === id
          ? {
              ...article,
              display: article.display === "none" ? "block" : "none",
            }
          : article
      )
    );
  };

  const [title, setTitle] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [summary, setSummary] = useState("");

  const changeSummary = (e) => {
    setSummary(e.target.value);
  };

  return (
    <section>
      <AddArticle
        name="Article"
        title={title}
        summary={summary}
        changeTitle={changeTitle}
        changeSummary={changeSummary}
        clickAdd={clickAdd}
      />
      <article>
        <ArticlesList
          articles={articles}
          toggleArticle={toggleArticle}
          removeArticle={removeArticle}
        />
      </article>
    </section>
  );
}

export default ArticleManager;
