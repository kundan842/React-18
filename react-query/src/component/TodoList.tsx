import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const { data: todosList, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
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
