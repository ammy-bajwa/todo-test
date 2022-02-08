import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState("");

  useEffect(() => {
    console.log("todos: ", todos);
  }, [todos]);

  useEffect(() => {
    console.log("todoText: ", todoText);
  }, [todoText]);

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
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
      />
      <form onSubmit={isEditing ? handleEdit : handleSubmit}>
        <input
          type="text"
          name="todoInput"
          placeholder="Please add text here"
          onChange={handleInputChange}
          value={todoText}
        />
        <button type="submit">{isEditing ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default App;
