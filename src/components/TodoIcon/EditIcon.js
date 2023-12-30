import React from 'react';
import { TodoIcon } from './';

function EditIcon({ onDelete }) {
  return (
    <TodoIcon
      type="edit"
      onClick={onDelete}
    />
  );
}

export { EditIcon };
