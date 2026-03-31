import { signupUser } from "./auth.js";

document.querySelector("#signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let mobile = document.querySelector("#mobile").value;
  let email = document.querySelector("#email").value;
  let address = document.querySelector("#address").value;
  let password = document.querySelector("#password").value;

  let res = signupUser(name, email, password);

  alert(res.message);

  if (res.success) {
    window.location.href = "login.html";
  }
});

