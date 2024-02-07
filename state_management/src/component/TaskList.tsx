import { useContext, useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";
import TaskContext from "../contexts/taskContext";
import AuthContext from "../contexts/authContext";

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      <p>user: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", id: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
