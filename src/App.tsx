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
  return (
    <div>
      {todos?.map(({ text }, i) => (
        <div key={i * Math.random()}>{text}</div>
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
