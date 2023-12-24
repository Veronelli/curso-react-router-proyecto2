import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../HomePage/useTodos";
import { useParams } from "react-router-dom";

function UpdateTodoPage() {
  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { id } = useParams();
  const onSubmitButton = (value) => {
    editTodo(value,id)
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoForm onSubmitButton={onSubmitButton} submitButton="Edit" />
      </div>
    </>
  );
}
export { UpdateTodoPage };
