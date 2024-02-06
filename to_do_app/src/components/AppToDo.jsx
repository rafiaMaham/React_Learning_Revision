import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setToDoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your task here..."
            onChange={handleNameChange}
            value={toDoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
