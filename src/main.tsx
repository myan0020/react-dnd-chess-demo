import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./Board";
import { observe } from "./Game";

observe((knightPosition) =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Board knightPosition={knightPosition} />
    </React.StrictMode>
  )
);
