import { useEffect, useMemo, useState } from "react";
import TodoFormUI from "../../ui/TodoFormUI";
import { useTodos } from "../../hooks/useTodos";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useParams } from "react-router-dom";

function EditPage(props) {
  const {
    state: { loading, getTodoById },
    stateUpdaters: {editTodoById}
  } = useTodos();
  const location = useLocation();
  const todoLoaded = !!location.state;
  const [inputText, setInputText] = useState("");
  const { id } = useParams();
  useEffect(() => {
    console.log(todoLoaded)
    if (todoLoaded) setInputText(location.state.todo.text);
  }, []);
  useEffect(() => {
    const todo = getTodoById(id);
    if (!loading && !todoLoaded) {
      setInputText(todo.text);
    }
  }, [loading]);
  const onSubmitButton = ({text})=>{
    editTodoById(id,text)
  }
  return <TodoFormUI buttonLabel="Update" inputText={inputText} onSubmitButton={onSubmitButton}/>;
}

export default EditPage;
