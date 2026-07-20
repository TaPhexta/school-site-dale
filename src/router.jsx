import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import About from "./pages/About/About";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import Boarding from "./pages/Boarding/Boarding";
import Culture from "./pages/Culture/Culture";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Sport from "./pages/Sport/Sport";

const router = createBrowserRouter([
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
      { path: "news", element: <News /> },
      { path: "sport", element: <Sport /> },
    ],
  },
]);

export default router;
