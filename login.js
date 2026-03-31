import { loginUser } from "./auth.js";

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let res = loginUser(email, password);

  alert(res.message);

  if (res.success) {
    window.location.href = "index.html"; // home page
  }
});



