import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <span className="loading loading-spinner text-error"></span>

    }

    if(user){
        return children
    }
    return(
        <Navigate to='/login' state={location?.pathname}></Navigate>
    )
    
    
};
export default PrivateRouter
