import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function TodoFormUI({ buttonLabel, onSubmitButton }) {
  const { state:{loading} } = useTodos();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          opacity: loading ?  "0.4" : "1", 
          pointerEvents: loading ? "none" : "all"
        }}
      >
        <TodoForm buttonLabel={buttonLabel} onSubmitButton={onSubmitButton}/>
      </div>
    </>
  );
}

export default TodoFormUI;
