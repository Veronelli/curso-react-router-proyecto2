import React, { useEffect } from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm({ onSubmitButton, submitButton, defaultText }) {
  const [newTodoValue, setNewTodoValue] = React.useState(defaultText);
  const navigation = useNavigate();
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigation("/")
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitButton(newTodoValue);
    navigation("/")
  };
  useEffect(()=>{
    setNewTodoValue(defaultText)
  },[defaultText])
  return (
    <form onSubmit={onSubmit}>
      <label>TODO TITLE</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={defaultText}
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
          {submitButton}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
