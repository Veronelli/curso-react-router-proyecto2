import React from 'react';
import './TodoForm.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function TodoForm({ addTodo, onSubmitButton, buttonLabel }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const history = useHistory()
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    history.push("/")
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitButton(newTodoValue)
    history.push("/")
  };

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
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
