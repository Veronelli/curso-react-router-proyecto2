import React from 'react';
import './CreateTodoButton.css';
import { useHistory } from 'react-router-dom';

function CreateTodoButton(props) {
  const history = useHistory();
  const onClickButton = () => {
    history.push('/create')
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
