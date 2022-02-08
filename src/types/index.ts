import { ChangeEvent } from "react";

export type TodoType = {
  text: string;
  id: string;
  createdAt: number;
};

export type TodosProType = {
  todos: TodoType[];
  handleDelete: HandleDeleteType;
  handleEditClick: HandleEditType;
};

export type TodoFormProType = {
  isEditing: boolean;
  handleEdit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
};

export type HandleDeleteType = (id: string) => void;
export type HandleEditType = (text: string, id: string) => void;
