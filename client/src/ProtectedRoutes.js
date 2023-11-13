import {Navigate, useLocation} from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProtectedRoutes({ children }) {
  const token = cookies.get("TOKEN");	
  const isAuthenticated = (token)?true:false; // your logic here
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}