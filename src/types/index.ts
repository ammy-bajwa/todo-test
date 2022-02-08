export type TodoType = {
  text: string;
  id: string;
};

export type TodosProType = {
  todos: TodoType[];
  handleDelete: HandleDeleteType;
  handleEditClick: HandleEditType;
};

export type HandleDeleteType = (id: string) => void;
export type HandleEditType = (text: string, id: string) => void;
