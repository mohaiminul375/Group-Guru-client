import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import CreateAssignment from "../components/Pages/CreateAssignment/CreateAssignment";
import PrivateRouter from "./PrivateRouter";
import Assignment from "../components/Pages/Assignment/Assignment";

export const router= createBrowserRouter([{
    path:'/',
    element:<Root/>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/create-assignment',
        element:<PrivateRouter><CreateAssignment></CreateAssignment></PrivateRouter>
    },
    {
        path:'/assignment',
        element:<Assignment></Assignment>
    }

]
}])