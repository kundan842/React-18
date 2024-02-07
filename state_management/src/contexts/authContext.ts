import React,{ Dispatch } from "react";
import { authAction } from "../reducers/authReducer";

interface AuthContextType
{
    user: string,
    dispatch: Dispatch<authAction>
}
const AuthContext =  React.createContext<AuthContextType>({} as AuthContextType)
export default AuthContext