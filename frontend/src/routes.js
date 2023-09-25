import Home from "./Pages/Home";
import Stores from "./Pages/Stores";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import ProductInfo from "./Pages/productInfo/ProductInfo";

import AdminPage from "./Pages/AdminPanel/AdminPage";
import Products from "./Pages/AdminPanel/Products/Products";
import Comments from "./Pages/AdminPanel/Comments/Comments";
import Articles from "./Pages/AdminPanel/Articles/Articles";
import Category from "./Pages/AdminPanel/Category/Category";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import Message from "./Pages/AdminPanel/Message/Message";
import User from "./Pages/AdminPanel/User/Users";
import AdminHome from "./Pages/AdminPanel/Home/AdminHome";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/stores", element: <Stores /> },
  { path: "/product/:productName", element: <ProductInfo /> },
  {
    path: "/AdminPanel/*",
    element: <AdminPage />,
    children: [
      { path: "", element: <AdminHome /> },
      { path: "Products", element: <Products /> },
      { path: "Comments", element: <Comments /> },
      { path: "Category", element: <Category /> },
      { path: "Articles", element: <Articles /> },
      { path: "Menus", element: <Menus /> },
      { path: "Message", element: <Message /> },
      { path: "Users", element: <User /> },
    ],
  },
];

export default routes;
