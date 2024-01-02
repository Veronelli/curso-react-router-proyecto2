import { useEffect, useMemo, useState } from "react";
import TodoFormUI from "../../ui/TodoFormUI";
import { useTodos } from "../../hooks/useTodos";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function useQueryParams() {
  const { search } = useLocation();
  const queryParamsObj = queryString.parse(search);
  return queryParamsObj;
}
function EditPage() {
  const {
    state: { loading, getTodoById },
  } = useTodos();
  const [inputText, setInputText] = useState("");
  const { id } = useQueryParams();
  useEffect(() => {
    const todo = getTodoById(id);
    if (!loading) {
      setInputText(todo.text);
    }
  }, [loading]);
  return <TodoFormUI buttonLabel="Update" inputText={inputText} />;
}

export default EditPage;
