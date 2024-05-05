import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contacts from "./screens/Contacts/Contacts.jsx";
import Albums from "./screens/Albums/Albums.jsx";
import Photos from "./screens/Photos/Photos.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contacts />,
    loader: () => {
      return fetch(`https://jsonplaceholder.typicode.com/users`).then(
        (response) => response.json()
      );
    },
  },
  {
    path: "/albums/:userId",
    element: <Albums />,
    loader: ({ params }) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
      ).then((response) => response.json());
    },
  },
  {
    path: "/photos/:albumId",
    element: <Photos />,
    loader: ({ params }) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`
      ).then((response) => response.json());
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
