import { TodosProType } from "../types";

const Todos = ({ todos, handleDelete, handleEditClick }: TodosProType) => {
  return (
    <div>
      {todos?.map(({ text, id }, i) => (
        <div key={i * Math.random()}>
          {text}

          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button type="button" onClick={() => handleEditClick(text, id)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
