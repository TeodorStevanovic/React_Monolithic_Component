import { useState } from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function App() {
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
      <header>
        <h1>Articles</h1>
        <input placeholder="Title" value={title} onChange={changeTitle} />
        <input placeholder="Summary" value={summary} onChange={changeSummary} />
        <button onClick={clickAdd}>Add</button>
      </header>
      <article>
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
      </article>
    </section>
  );
}

export default App;
