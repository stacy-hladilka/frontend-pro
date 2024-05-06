import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { useDispatch } from "react-redux";
import { addItem, toggleAccomplishedAction } from "./services/store";

function App() {
  const dispatch = useDispatch();

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      task: taskText,
      isAccomplished: false,
    };
    dispatch(addItem(newTask));
  }

  function toggleAccomplished(id) {
    dispatch(toggleAccomplishedAction(id));
  }

  return (
    <>
      <TodoList onClick={toggleAccomplished} />
      <AddTodoForm addTask={addTask} />
    </>
  );
}

export default App;
