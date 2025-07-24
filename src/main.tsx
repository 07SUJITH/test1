import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { initGA } from "./utils/analytics";

// Initialize GA
initGA();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
