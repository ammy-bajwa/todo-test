import { TodoFormProType } from "../types";

const TodoForm = ({
  isEditing,
  handleEdit,
  handleSubmit,
  handleInputChange,
  todoText,
}: TodoFormProType) => {
  return (
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
  );
};

export default TodoForm;
