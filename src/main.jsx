import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ApiProvider } from "./ApiProvider";
import { Cart } from "./pages/Cart/Cart";
import { Favorites } from "./pages/Favorites/Favorites";
import { Notifications } from "./pages/Notifications/Notifications";
import { CoffeeBeansPage } from "./pages/Home/CoffeeBeansPage/CoffeeBeansPage";
import { CoffeePage } from "./pages/Home/CoffeePage/CoffeePage";


import { NotFound } from "./shared/components/NotFound/NotFound";
import { Login } from "./shared/components/Login/Login";
import { Payment } from "./shared/components/Payment/Payment";


const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <NotFound/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "payment",
        element: <Payment/>,
      },

       {
        path: "coffee_beans",
        element: <CoffeeBeansPage/>,
      },

      {
        path: "coffee",
        element: <CoffeePage/>,
      },
     
    ],
  },
  {
    path: "/product/:id",
    element: <CoffeeBeansPage />,
    
  },

  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
