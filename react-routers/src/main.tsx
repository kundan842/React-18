import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import "bootstrap/dist/css/bootstrap.css";
import nestedRouter from "./routing/netsed_routing_router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={nestedRouter}></RouterProvider>
  </React.StrictMode>
);
