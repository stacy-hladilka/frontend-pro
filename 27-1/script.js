const form = document.getElementById("form");
const idInput = document.getElementById("id-input");
const mainSection = document.getElementById("main-section");
const postWrapper = document.getElementById("post-wrapper");

const getComments = async (commentsButton) => {
  commentsButton.style.display = "none";
  try {
    const comments = await fetch(
      `https://jsonplaceholder.typicode.com//posts/${idInput.value}/comments`
    );
    if (comments.ok === false) {
      throw "error";
    }
    const resultComments = await comments.json();

    const commentsList = document.createElement("ul");

    resultComments.forEach((element) => {
      const commentItem = document.createElement("li");
      const commentName = document.createElement("h5");
      const commentEmail = document.createElement("h6");
      const commentBody = document.createElement("p");

      commentName.innerText = element.name;
      commentEmail.innerText = element.email;
      commentBody.innerText = element.body;

      commentItem.appendChild(commentName);
      commentItem.appendChild(commentBody);
      commentItem.appendChild(commentEmail);
      commentsList.appendChild(commentItem);
    });

    postWrapper.appendChild(commentsList);
  } catch (error) {
    alert("Fetching comments failed. Try again later!");
    commentsButton.style.display = "block";
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  postWrapper.innerHTML = "";
  try {
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idInput.value}`
    );
    if (post.ok === false) {
      throw "error";
    }

    const resultPost = await post.json();
    const postTitle = document.createElement("h4");
    const postBody = document.createElement("p");
    const commentsButton = document.createElement("button");

    commentsButton.innerText = "See comments";

    commentsButton.addEventListener("click", () => getComments(commentsButton));

    postTitle.innerText = resultPost.title;
    postBody.innerText = resultPost.body;

    postWrapper.appendChild(postTitle);
    postWrapper.appendChild(postBody);
    postWrapper.appendChild(commentsButton);
  } catch (error) {
    alert(`Your id "${idInput.value}" is not found!`);
  }
});
