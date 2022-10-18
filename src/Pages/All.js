import React from "react";
import AddList from "../Components/AddList";
import Lists from "../Components/Lists";
import Template from "../Components/Template";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./All.css";
import dummyData from "../static/dummyData";
import { v4 as uuidv4 } from "uuid";

const All = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState(dummyData);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: uuidv4(),
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      console.log(todos);
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  return (
    <div className="container">
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      <Template todoLength={todos.length}>
        <Lists
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        {insertToggle && (
          <AddList
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </div>
  );
};
export default All;
