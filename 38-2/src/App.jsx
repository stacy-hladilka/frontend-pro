import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodoItem,
  fetchTodoList,
  toggleAccomplishedItem,
} from "./services/store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => {
    return state.error;
  });

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  function addTask(taskText) {
    const newTask = {
      task: taskText,
      isAccomplished: false,
    };
    dispatch(addNewTodoItem(newTask));
  }

  function toggleAccomplished(id) {
    dispatch(toggleAccomplishedItem(id));
  }

  if (error !== null) {
    return <p>Error happened: {error}</p>;
  }

  return (
    <>
      <TodoList onClick={toggleAccomplished} />
      <AddTodoForm addTask={addTask} />
    </>
  );
}

export default App;
