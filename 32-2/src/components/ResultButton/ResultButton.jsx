import "./ResultButton.css";

function ResultButton(props) {
  return (
    <button onClick={props.onClick} className="see-result">
      Show Results
    </button>
  );
}

export default ResultButton;
