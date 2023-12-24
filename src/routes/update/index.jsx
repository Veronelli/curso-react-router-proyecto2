import { useEffect } from "react";
import { useTodos } from "../../pages/HomePage/useTodos";
import { UpdateTodoPage } from "../../pages/UpdateTodosPage";

function UpdateTodo() {
  return <UpdateTodoPage submitButton="Edit" />;
}
export { UpdateTodo };
