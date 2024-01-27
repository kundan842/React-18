import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import LikeApp from "./components/LikeApp";
import "bootstrap/dist/css/bootstrap.css";
import Like from "./components/Like";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Like></Like> */}
    <LikeApp />
  </React.StrictMode>
);
