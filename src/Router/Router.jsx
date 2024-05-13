import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import CreateAssignment from "../components/Pages/CreateAssignment/CreateAssignment";
import PrivateRouter from "./PrivateRouter";
import Assignment from "../components/Pages/Assignment/Assignment";
import AssignmentDetails from "../components/Pages/AssignmentDetails/AssignmentDetails";
import MySubmission from "../components/Pages/MySubmission/MySubmission";
// import axios from "axios";
import PendingAssignment from "../components/Pages/PendingAssignment/PendingAssignment";
import UpdateAssignment from "../components/Pages/UpdateAssignment/UpdateAssignment";
import axios from "axios";

export const router= createBrowserRouter(
    [{
    
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
        loader:({params})=>axios.get(`http://localhost:5000/all-assignment/${params.id}`,{withCredentials:true})
    },
    {
        path:'/my-submission',
        element:<PrivateRouter><MySubmission></MySubmission></PrivateRouter>
    },
    {
        path:'/pending-assignment',
        element:<PrivateRouter><PendingAssignment></PendingAssignment></PrivateRouter>
    },
    {
        path:'/update-assignment/:id',
        element:<UpdateAssignment></UpdateAssignment>,
        loader:({params})=>axios.get(`http://localhost:5000/all-assignment/${params.id}`,{withCredentials:true})
    }

]
}])