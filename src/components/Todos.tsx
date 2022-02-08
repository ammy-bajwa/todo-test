import { TodosProType } from "../types";

const Todos = ({ todos, handleDelete, handleEditClick }: TodosProType) => {
  return (
    <div className="w-100">
      {todos?.map(({ text, id, createdAt }, i) => (
        <div key={i * Math.random()} className="space-around-childs">
          {text}
          <span>{new Date(createdAt).toString()}</span>
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
