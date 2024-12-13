import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../components/JobDetails";
import PrivateRouter from "../private/PrivateRouter";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<p>page not found</p>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/jobs/:id',
                element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
                

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router