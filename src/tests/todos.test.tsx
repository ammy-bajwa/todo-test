import React from "react";
import { render, screen } from "@testing-library/react";
import Todos from "../components/Todos";

test("It should render nothing if there is no todo items in the array", () => {
  render(
    <Todos todos={[]} handleDelete={() => {}} handleEditClick={() => {}} />
  );
  const linkElement = screen.queryByTestId("todosContainer");
  expect(linkElement?.hasChildNodes()).toBeFalsy();
});

test("It should render todo items in the array", () => {
  const todos = [
    {
      id: "1",
      text: "todo1",
      createdAt: new Date().getTime(),
    },
    // {
    //   id: "2",
    //   text: "todo2",
    //   createdAt: new Date().getTime(),
    // },
  ];
  render(
    <Todos todos={todos} handleDelete={() => {}} handleEditClick={() => {}} />
  );
  const linkElement = screen.queryByTestId("todosContainer");
  expect(linkElement?.hasChildNodes()).toBeTruthy();
});
