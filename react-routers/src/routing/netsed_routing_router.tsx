import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import LoginPage from "../components/LoginPage";
import UserDetailPage from "../components/UserDetailPage";
import UserPage from "../components/UserPage";

const nestedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":usr_id", element: <UserDetailPage /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default nestedRouter;

// createBrowserRouter function takes array of RouteObject
// each RouteObject has two property path, elememnt
// which decides if the user is on that path , then theta particular element or component shouuld render
