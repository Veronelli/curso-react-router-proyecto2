import React, { useEffect } from "react";
import "./TodoSearch.css";
import { useSearchParams } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchValue(searchParams.get("searchTodo") || "");
  }, []);

  const onSearchValueChange = (event) => {
    const searchTodo = event.target.value;
    setSearchValue(searchTodo);
    setSearchParams({ searchTodo });
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
