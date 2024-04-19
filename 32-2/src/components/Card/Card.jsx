import "./Card.css";

function Card(props) {
  return (
    <div
      className={`card ${props.isWinner === true ? "winner-background" : ""}`}
    >
      <p className="smile">{props.smileAttribute}</p>
      <button
        disabled={props.isWinner !== undefined}
        className="vote-button"
        onClick={() => props.increaseVote(props.smileAttribute)}
      >
        Vote {props.votesAttribute}
      </button>
    </div>
  );
}

export default Card;
