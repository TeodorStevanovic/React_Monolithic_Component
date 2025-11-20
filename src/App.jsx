import { useState } from "react";

function App() {
  const id = (function* () {
    let i = 1;
    while (true) {
      yield i;
      i += 1;
    }
  })();
  const [articles, setArticles] = useState([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none",
    },
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <section>
      <header>
        <h1>Articles</h1>
        <input placeholder="Title" />
        <input placeholder="Summary" />
        <button>Add</button>
      </header>
      <article>
        <ul>
          {articles.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} title="Toggle Summary">
                {i.title}
              </a>
              &nbsp;
              <a href={`#${i.id}`} title="Remove">
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
