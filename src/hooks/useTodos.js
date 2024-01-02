import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = ({text}) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id: uuidv4(),
    });
    saveTodos(newTodos);
  };

  const getTodoById = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const editTodoById = (id, text) => {
    const todoEdited = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    saveTodos(todoEdited);
  };

  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    getTodoById,
  };

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    editTodoById,
    sincronizeTodos,
  };

  return { state, stateUpdaters };
}

export { useTodos };
