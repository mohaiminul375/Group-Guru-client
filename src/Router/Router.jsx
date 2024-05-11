import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import CreateAssignment from "../components/Pages/CreateAssignment/CreateAssignment";
import PrivateRouter from "./PrivateRouter";
import Assignment from "../components/Pages/Assignment/Assignment";
import AssignmentDetails from "../components/Pages/AssignmentDetails/AssignmentDetails";
import axios from "axios";
import MySubmission from "../components/Pages/MySubmission/MySubmission";

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
    },
    {
        path:'/details/:id',
        element:<PrivateRouter><AssignmentDetails></AssignmentDetails></PrivateRouter>,
        loader:({params})=>axios.get(`http://localhost:5000/all-assignment/${params.id}`)
    },
    {
        path:'/my-submission',
        element:<PrivateRouter><MySubmission></MySubmission></PrivateRouter>
    }

]
}])