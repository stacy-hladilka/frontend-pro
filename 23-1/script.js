const linkButton = document.getElementById("link-button");
const input = document.getElementById("input");

linkButton.addEventListener("click", () => {
  let inputValue = input.value;
  if (!inputValue.startsWith("http")) {
    inputValue = "https://" + inputValue;
  }
  try {
    const url = new URL(inputValue);
    window.open(url, "_self");
  } catch (error) {
    alert("Link is not valid");
  }
});
