import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setTodos([...todos, { id: Math.random().toString(), text: todoText }]);
    setTodoText("");
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event?.target?.value);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter(({ id: todoId }) => todoId !== id);
    setTodos(updatedTodos);
  };
  const handleEdit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo?.id === editingItemId) {
        todo.text = todoText;
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoText("");
    setIsEditing(false);
    setEditingItemId("");
  };
  const handleEditClick = (text: string, id: string) => {
    setIsEditing(true);
    setTodoText(text);
    setEditingItemId(id);
  };
  return (
    <div>
      <TodoForm
        isEditing={isEditing}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        todoText={todoText}
      />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;
