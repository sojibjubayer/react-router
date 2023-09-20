import { createBrowserRouter } from "react-router-dom";
import MainLayuot from "../layouts/MainLayuot";
import Home from "../layouts/Home";
import Products from "../layouts/Products";
import Dashboard from "../layouts/Dashboard";
import ProductDetails from "../layouts/ProductDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../layouts/Profile";
import EditProfile from "../layouts/EditProfile";


const myCreatedRoute = createBrowserRouter([
{
    path:'/',
    element:<MainLayuot></MainLayuot>,
    children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
            path:'/products',
            element:<Products></Products>,
            loader:()=>fetch(`https://dummyjson.com/products`)
        },
        {
            path:'/products/:id',
            element:<ProductDetails></ProductDetails>,
            loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:'/dashboard',
                    element:<Dashboard></Dashboard>
                },
                {
                    path:'/dashboard/profile',
                    element:<Profile></Profile>
                },
                {
                    path:'/dashboard/editProfile',
                    element: <EditProfile></EditProfile>
                }
            ]
        }
    ]
}



])

export default myCreatedRoute;