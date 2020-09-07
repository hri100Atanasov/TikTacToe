import userService from "./services/userService.js";

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let allUsers = new userService().getAllUsers().then((data) => {
    if (
      data.some((el) => {
        return el.name === username;
      })
    ) {
      alert("Please eneter another username!");
    } else {
      new userService().createNewUser(data.length, username).then((data) => {
        window.location = "/games.html";
      });
    }
  });
});
