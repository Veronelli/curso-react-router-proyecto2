import React from "react";
import { Home } from "./home";
import { CreateTodo } from "./create";
import { UpdateTodo } from "./update";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./not-found";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export { App };
