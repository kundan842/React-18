
// define the task context or box type what kind of data it will share

import { Task, TaskAction } from "../reducers/taskReducer";
import React, { Dispatch } from "react";

interface TaskContextType
{
    tasks: Task []
    dispatch: Dispatch<TaskAction>
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)
export default TaskContext;