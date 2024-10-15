import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AllProducts from "../Components/Products/AllProducts";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "allProducts",
        element: <AllProducts/>
      }
    ],
  },
  //dashboard
  {
    path: "dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "profile",
        element: <Profile/>
      }
    ]
  }
]);

export default router;
