import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const useTodos = () => {
  const fetchtodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  // this use query hook returns various object getting data out of it namings it todos

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchtodos,
  });
};

export default useTodos;
