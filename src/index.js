import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import CryptoDetails from "./components/CryptoDetails";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Requirements from "./pages/Requirements";
import About from "./pages/About";
import Footer from "./components/Footer";
import Conversion from "./pages/Conversion";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/crypto",
    element: (
      <>
        <Header />
        <div className="bg-gray-400">
          <CryptoHome />
        </div>
        <Footer />
      </>
    ),
    children: [
      {
        path: "", // Relative path
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "trending", // Relative path
        element: <Trending />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "saved", // Relative path
        element: <Saved />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "/requirements",
    element: (
      <>
        <Header />
        <Requirements />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/conversion",
    element: (
      <>
        <Header />
        <Conversion />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
