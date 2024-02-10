import { useContext, useReducer, useState } from "react";
import useAuthStore from "./auth";

const LoginStatus = () => {
  // using custom hook , that internally uses the conetx
  const { user, login, logout } = useAuthStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("kundan")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
