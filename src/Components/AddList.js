import React, { useEffect, useState } from "react";

import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./AddList.css";

const AddList = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        className="inputForm"
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
          className="inputArea"
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              color="#395B64"
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              color="#CD3861"
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit" className="submitBtn">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};
export default AddList;
