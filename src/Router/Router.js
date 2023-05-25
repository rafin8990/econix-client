import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Product from "../Pages/Products/Product";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import AddCustomer from "../Pages/DashBoard/AddCustomer/AddCustomer";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/product',
                element:<Product></Product>
            },
            {
                path:'/productsDetails',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/checkout',
                element:<CheckOut></CheckOut>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:([
            {
                path:'/dashboard',
                element:<AllUser></AllUser>
            },
            {
                path:'/dashboard/addcustomer',
                element:<AddCustomer></AddCustomer>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProducts></AddProducts>
            }
        ])
    }
])