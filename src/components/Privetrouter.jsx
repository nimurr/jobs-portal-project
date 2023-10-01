import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate } from "react-router-dom";

 
export default function Privetrouter({children}) {
    const {user } = useContext(AuthContext)

    if(user){
        return  children;
       
    }

  return  <Navigate to='/login'></Navigate>
}

