import { useState } from "react";
import "./AddTodoForm.css";

function AddTodoForm(props) {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTask(text);
        setText("");
      }}
      className="todo-form"
    >
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter new task"
        type="text"
        className="todo-input"
        required
      />
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
}

export default AddTodoForm;
