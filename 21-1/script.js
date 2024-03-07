const smiles = document.getElementsByClassName("smile");
const votedAmounts = document.getElementsByClassName("voted-amount");

const smilesArray = Array.from(smiles);
const votedAmountsArray = Array.from(votedAmounts);

smilesArray.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    const votesCounter = votedAmountsArray[index].innerHTML;
    let votesCounterNumber = Number(votesCounter);
    votedAmountsArray[index].innerHTML = votesCounterNumber + 1;
  });
});
