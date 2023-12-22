import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "12/10/2023",
    },
    {
      name: "like this app",
      dueDate: "12/15/2023",
    },
  ];
  return (
    <center className="Todo-conatiner">
      <AppName>Todo</AppName>
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
