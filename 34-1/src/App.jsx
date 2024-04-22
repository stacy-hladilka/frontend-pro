import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Wash the dishes", isAccomplished: true },
    { id: 2, task: "Do laundry", isAccomplished: false },
    { id: 3, task: "Mow the lawn", isAccomplished: false },
    { id: 4, task: "Wipe the dust", isAccomplished: false },
  ]);
  const [text, setText] = useState("");

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      task: taskText,
      isAccomplished: false,
    };
    setTodoList([...todoList, newTask]);
    setText("");
  }

  function toggleAccomplished(id) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isAccomplished: !task.isAccomplished };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <TodoList list={todoList} onClick={toggleAccomplished} />
      <AddTodoForm addTask={addTask} text={text} setText={setText} />
    </>
  );
}

export default App;
