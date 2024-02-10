import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import UserListPage from "../components/UserListPage";
import ContactPage from "../components/ContactPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;

// createBrowserRouter function takes array of RouteObject
// each RouteObject has two property path, elememnt
// which decides if the user is on that path , then theta particular element or component shouuld render
