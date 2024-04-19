import "./VoteAgainButton.css";

function VoteAgainButton(props) {
  return (
    <button onClick={props.onClick} className="vote-again">
      Vote Again
    </button>
  );
}

export default VoteAgainButton;
