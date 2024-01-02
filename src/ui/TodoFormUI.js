import { TodoForm } from "../components/TodoForm";

function TodoFormUI({ bottonLabel }) {
  return (
    <>
      <div style={{width:"100%",height:"100vh", display:"flex", justifyContent: "center", alignContent: "center"}}>
        <TodoForm />
      </div>
    </>
  );
}

export default TodoFormUI;
