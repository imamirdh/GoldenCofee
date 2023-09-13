import Home from "./Pages/Home"
import Stores from "./Pages/Stores"
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import ProductInfo from "./Pages/productInfo/ProductInfo";
const routes=[
    {path:"/" ,element:<Home/>},
    {path:"/Login",element:<Login/>},
    {path:"/Register",element:<Register/>},
    {path:"/stores" ,element:<Stores/>},
    {path:"/product/:productName" ,element:<ProductInfo/>},
    
]

export default routes;