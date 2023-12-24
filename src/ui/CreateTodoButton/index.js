import React from 'react';
import './CreateTodoButton.css';
import { useNavigate } from 'react-router-dom';


function CreateTodoButton(props) {
  const navigation = useNavigate();
  const onClickButton = () => {
    navigation("/create")    
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
