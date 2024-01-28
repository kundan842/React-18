import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchtodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  // this use query hook returns various object getting data out of it namings it todos

  const { data: todosList } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchtodos,
  });

  // if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todosList?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
