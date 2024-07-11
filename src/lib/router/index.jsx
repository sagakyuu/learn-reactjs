import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Register from "../../pages/register";
import Login from "../../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
