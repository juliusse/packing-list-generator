import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Activity } from "@/types/configuration";

declare global {
  interface Window {
    config: Activity[];
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App activities={window.config} />
  </React.StrictMode>,
);

export {};
