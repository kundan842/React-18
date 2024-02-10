import { ReactNode, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import AuthContext from "../contexts/authContext";

interface Props {
  children: ReactNode;
}
const [user, dispatch] = useReducer(authReducer, "");

const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
