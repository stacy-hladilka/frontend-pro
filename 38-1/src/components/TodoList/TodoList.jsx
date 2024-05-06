import "./TodoList.css";
import { useSelector } from "react-redux";

function TodoList(props) {
  const todoList = useSelector((state) => {
    return state.todoList;
  });

  return (
    <ul className="todo-list">
      {todoList.map((element) => {
        return (
          <li key={element.id} className="list-item">
            <input
              type="checkbox"
              id={element.id}
              checked={element.isAccomplished}
              onChange={() => props.onClick(element.id)}
              className="list-item__checkbox"
            />
            <label
              className={`list-item__checkbox-text ${
                element.isAccomplished && "list-item__checkbox-text_checked"
              }`}
              htmlFor={element.id}
            >
              {element.task}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
