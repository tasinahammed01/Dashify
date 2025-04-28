import { createBrowserRouter } from "react-router";
import LayoutPage from "../LayoutPage/LayoutPage";
import HomePage from "../Pages/HomePage/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
