import React, { useEffect, useState } from "react";
import "./App.css";

type TodoType = {
  text: string;
  id: string;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState("");

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
  const handleEdit = (event: React.MouseEvent<HTMLElement>) => {};
  return (
    <div>
      {todos?.map(({ text, id }, i) => (
        <div key={i * Math.random()}>
          {text}

          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoInput"
          onChange={handleInputChange}
          value={todoText}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
