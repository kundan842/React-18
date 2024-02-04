import { useReducer, useState } from "react";
import CounterReducer from "../reducers/counterReducer";

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [value, dispatch] = useReducer(CounterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
