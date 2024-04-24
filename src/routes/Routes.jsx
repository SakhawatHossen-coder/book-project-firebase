import React, { Children } from "react";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";
import Books from "../pages/Books";
import Book from "../pages/Book";
import UpdateBook from "../pages/UpdateBook";
import Signin from "../pages/Signin";
import { Signup } from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/book",
        element: <Book />,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/book/:id",
        element: <UpdateBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path:'/signin',
element:<Signin/>
      },
      {
        path:'/signup',
        element:<Signup/>
      }
    ],
  },
]);

export default router;
