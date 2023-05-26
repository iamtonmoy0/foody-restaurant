import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import * as RoutePath from './routes'

const PrivateRoute = ({children}) => {
	const location=useLocation()
	const {user}=useContext(AuthContext)
	if(user){
		return children
	}
	return <Navigate to={RoutePath.LOGIN} state={{from:location}}></Navigate> 
}

export default PrivateRoute;
