import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        index: true,
        element: <Home />,
      },
    ]
  }
])

export default routes;
