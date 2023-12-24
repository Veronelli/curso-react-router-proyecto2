import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../HomePage/useTodos";

function CreateTodoPage() {
  const { stateUpdaters, state } = useTodos();
  const { addTodo } = stateUpdaters
  const { todos } = state
  const onSubmitButton = (value)=>{
    addTodo(value);
  }
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
        <TodoForm onSubmitButton={onSubmitButton} submitButton="Create"/>
      </div>
    </>
  );
}
export { CreateTodoPage };
