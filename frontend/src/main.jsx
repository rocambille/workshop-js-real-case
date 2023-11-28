import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import PostById from "./pages/PostById";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/posts`);
        },
      },
      {
        path: "/posts/:id",
        element: <PostById />,
        loader: ({ params }) => {
          return fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/posts/${params.id}`
          );
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
