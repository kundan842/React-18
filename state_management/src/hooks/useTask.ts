import { useContext } from "react";
import TaskContext from "../contexts/taskContext";

const useTask  = () => useContext(TaskContext)

export default useTask;