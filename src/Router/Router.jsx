import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AllProducts from "../Components/Products/AllProducts";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Dashboard/Profile";
import Products from "../Components/Products/Products";
import MyProducts from "../Components/Dashboard/User/MyProducts";
import Cart from "../Components/Dashboard/User/Cart";
import PurchaseHistory from "../Components/Dashboard/User/PurchaseHistory";
import SellingHistory from "../Components/Dashboard/User/SellingHistory";
import AllUsers from "../Components/Dashboard/Admin/AllUsers";
import AllAdminProducts from "../Components/Dashboard/Admin/AllAdminProducts";
import AllOrderHistory from "../Components/Dashboard/Admin/AllOrderHistory";

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
      },
      {
        path: "manageProducts",
        element: <MyProducts/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "purchaseHistory",
        element: <PurchaseHistory/>
      },
      {
        path: "sellingHistory",
        element: <SellingHistory/>
      },

      // admin
      {
        path: "manageUsers",
        element: <AllUsers/>
      },
      {
        path: "manageAllProducts",
        element: <AllAdminProducts/>
      },
      {
        path: "allOrderHistory",
        element: <AllOrderHistory/>
      }
    ]
  }
]);

export default router;
