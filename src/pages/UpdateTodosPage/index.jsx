import { useLocation } from 'react-router-dom';
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../HomePage/useTodos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function UpdateTodoPage() {
  const { stateUpdaters,state } = useTodos();
  const { editTodo } = stateUpdaters;
  const location = useLocation();
  const {loading, getTodo} = state;
  const { id } = useParams();
  const [todo, setTodo] = useState(location.state || {}) ;
  
  const onSubmitButton = (value) => {
    editTodo(value,id)
  };

  useEffect(()=>{
    if(!loading)
      setTodo(getTodo(id))
  },[loading])
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: todo.text === "" || !todo.text ?  "none" : "all",
          opacity: todo.text === "" || !todo.text ? 0.5 : 1,
        }}
      >
        <TodoForm onSubmitButton={onSubmitButton} submitButton="Edit" defaultText={todo.text} />
      </div>
    </>
  );
}
export { UpdateTodoPage };
