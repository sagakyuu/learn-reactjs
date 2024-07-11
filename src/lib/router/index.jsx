import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Register from "../../pages/register";
import Login from "../../pages/login";
import Product from "../../pages/product";

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
  {
    path: "/product",
    element: <Product />,
  },
]);

export default router;
