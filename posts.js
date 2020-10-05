fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => json.map(item => addUsersToHTML(item)));

const usersBlock = document.querySelector("#article");
const formPostToHTML = document.querySelector("#post");

function addUsersToHTML(posts) {
  let div = document.createElement("div");
  let id = document.createElement("span");
  let userId = document.createElement("h4");
  let title = document.createElement("h2")
  let post = document.createElement("p");

  div.classList.add("post");
  id.classList.add("post-id");
  userId.classList.add("post-user-id");
  title.classList.add("post-title");
  post.classList.add("post-text");

  id.innerText = "ID: " + posts.id;
  userId.innerText = "UserID: " + posts.userId;
  title.innerText = posts.title;
  post.innerText = posts.body;

  div.appendChild(id);
  div.appendChild(userId);
  div.appendChild(title);
  div.appendChild(post);
  usersBlock.appendChild(div);
}

formPostToHTML.addEventListener("submit", event => {
  event.preventDefault();

  const post = {};

  post.id = event.target["0"].value;
  post.userId = event.target["1"].value;
  post.title = event.target["2"].value;
  post.body = event.target["3"].value;

  addUsersToHTML(post);
});