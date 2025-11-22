import React from "react";

const AddArticle = ({
  name,
  title,
  summary,
  changeTitle,
  changeSummary,
  clickAdd,
}) => {
  return (
    <header>
      <h1>{name}</h1>
      <input placeholder="Title" value={title} onChange={changeTitle} />
      <input
        placeholder="Summary"
        value={summary}
        onChange={changeSummary}
      />
      <button onClick={clickAdd}>Add</button>
    </header>
  );
};

export default AddArticle;
