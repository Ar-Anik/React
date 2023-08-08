import { useState } from "react";
import TodoForm from "./todoForm";
import TodoItem from "./todoItem";
import withLogger from "../withLogger/withLogger";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((previous) => [...previous, newTodo]);
      setNewTodo("");
    }
  };

  const completeTodo = (index) => {
    setTodos((previous) => {
      const updateTodos = [...previous];
      updateTodos.splice(index, 1);

      return updateTodos;
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            handleComplete={() => completeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default withLogger(TodoList);
