import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AllMenu from "../Pages/AllMenu/AllMenu";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <AllMenu></AllMenu>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
