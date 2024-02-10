import { useState } from "react";
import Counter from "./Counter/Counter";
import NavBar from "./component/NavBar";
import LoginStatus from "./auth/LoginStatus";

function App() {
  return (
    <>
      <Counter></Counter>
      <NavBar></NavBar>
      <LoginStatus></LoginStatus>
    </>
  );
}

export default App;
