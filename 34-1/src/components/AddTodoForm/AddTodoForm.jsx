import "./AddTodoForm.css";

function AddTodoForm(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTask(props.text);
      }}
      className="todo-form"
    >
      <input
        value={props.text}
        onChange={(event) => props.setText(event.target.value)}
        placeholder="Enter new task"
        type="text"
        className="todo-input"
      />
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
}

export default AddTodoForm;
