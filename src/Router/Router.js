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
            }
        ]
    }
])