import React, { useEffect } from "react";
import "./TodoForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useTodos } from "../../hooks/useTodos";

function TodoForm({ onSubmitButton, buttonLabel, inputText }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const history = useHistory();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    history.push("/");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitButton({text:newTodoValue});
    history.push("/");
  };

  useEffect(() => {
    setNewTodoValue(inputText)
  }, [inputText]);
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
