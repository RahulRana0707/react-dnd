import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DragDropProvider from "./provider/DragDropProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DragDropProvider>
    <App />
  </DragDropProvider>
);
