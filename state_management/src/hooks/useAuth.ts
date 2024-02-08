import { useContext } from "react";
import AuthContext from "../contexts/authContext";

// custom hook that uses the context , returns the valyues
const useAuth = () =>  useContext(AuthContext)

export default useAuth;