import { createBrowserRouter } from "react-router";
import LayoutPage from "../LayoutPage/LayoutPage";
import HomePage from "../Pages/HomePage/HomePage";
import Analytics from "../Pages/Analytics/Analytics";
import Calender from "../Pages/Calender/Calender";
import Profile from "../Pages/Profile/Profile";
import Tasks from "../Pages/Tasks/Tasks";
import Email from "../Pages/Email/Email";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/tasks",
        element: <Tasks> </Tasks>,
      },
      {
        path: "/email",
        element: <Email></Email>,
      },
    ],
  },
]);
