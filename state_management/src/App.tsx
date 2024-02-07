import { useReducer, useState } from "react";
import Counter from "./component/Counter";
import TaskList from "./component/TaskList";
import LoginStatus from "./component/LoginStatus";
import taskReducer from "./reducers/taskReducer";
import TaskContext from "./contexts/taskContext";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

function App() {
  const [tasks, TaskDispatch] = useReducer(taskReducer, []);
  const [user, AuthDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: AuthDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: TaskDispatch }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
