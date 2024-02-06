import AppName from "./components/AppName";
import AddTodo from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
impo
rt { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const initialToDoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Like this video",
    //   dueDate: "right now",
    // },
  ];

  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added - ${itemName} at ${itemDueDate}`);
    const newToDoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter((item) => item.name !== todoItemName);
    console.log(`Item deleted: ${todoItemName}`);
    setToDoItems(newToDoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
