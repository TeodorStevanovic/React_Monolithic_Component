import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ArticleManager from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ArticleManager />
  </StrictMode>
);
