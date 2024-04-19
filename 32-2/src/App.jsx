import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import ResultButton from "./components/ResultButton/ResultButton";
import VoteAgainButton from "./components/VoteAgainButton/VoteAgainButton";

function App() {
  const [isVoteFinished, setVoteFinished] = useState(false);
  const [voteData, setVoteData] = useState([
    {
      smile: "😱",
      votes: 0,
    },
    {
      smile: "😌",
      votes: 0,
    },
    {
      smile: "😭",
      votes: 0,
    },
    {
      smile: "😍",
      votes: 0,
    },
  ]);

  function increaseVote(smileParam) {
    const index = voteData.findIndex((element) => element.smile === smileParam);
    const voteDataCopy = [...voteData];
    voteDataCopy[index].votes += 1;

    setVoteData(voteDataCopy);
  }

  function countMaxVote() {
    const votesArr = voteData.map((element) => element.votes);
    const maxVote = Math.max(...votesArr);

    const resultArr = voteData.map((element) => {
      element.isWinner = element.votes === maxVote;
      return element;
    });

    setVoteData(resultArr);
    setVoteFinished(true);
  }

  function resetVotes() {
    setVoteData([
      {
        smile: "😱",
        votes: 0,
      },
      {
        smile: "😌",
        votes: 0,
      },
      {
        smile: "😭",
        votes: 0,
      },
      {
        smile: "😍",
        votes: 0,
      },
    ]);
    setVoteFinished(false);
  }

  return (
    <>
      <div className="wrapper">
        <div className="main-container">
          {voteData.map((element) => {
            return (
              <Card
                isWinner={element.isWinner}
                key={element.smile}
                smileAttribute={element.smile}
                votesAttribute={element.votes}
                increaseVote={increaseVote}
              />
            );
          })}
        </div>
        {isVoteFinished === false && <ResultButton onClick={countMaxVote} />}
        {isVoteFinished === true && <VoteAgainButton onClick={resetVotes} />}
      </div>
    </>
  );
}

export default App;
