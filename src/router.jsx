import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import Boarding from "./pages/Boarding/Boarding";
import Culture from "./pages/Culture/Culture";
import Sport from "./pages/Sport/Sport";
import News from "./pages/News/News";
import NewsArticle from "./pages/NewsArticle/NewsArticle";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "academics", element: <Academics /> },
        { path: "admissions", element: <Admissions /> },
        { path: "boarding", element: <Boarding /> },
        { path: "culture", element: <Culture /> },
        { path: "sport", element: <Sport /> },

        // News routes
        {
          path: "news",
          children: [
            {
              index: true,
              element: <News />,
            },
            {
              path: ":slug",
              element: <NewsArticle />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/school-site-dale",
  },
);

export default router;
