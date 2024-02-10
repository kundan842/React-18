import { ReactNode, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";
import TaskContext from "../contexts/taskContext";
interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, TaskDispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch: TaskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
