import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
import "./footer.js";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);




// apna code


// ==========================
// 🔐 AUTH SYSTEM
// ==========================

// ELEMENTS
let user = JSON.parse(localStorage.getItem("currentUser"));

let userName = document.querySelector("#userName");
let signInLink = document.querySelector("#signInLink");
let signUpLink = document.querySelector("#signUpLink");
let logoutBtn = document.querySelector("#logoutBtn");

// 👉 IF LOGGED IN
if (user) {
  userName.innerText = `Hi, ${user.name}`;

  signInLink.style.display = "none";
  signUpLink.style.display = "none";
  logoutBtn.style.display = "inline-block";
}

// 👉 IF LOGGED OUT
else {
  userName.innerText = "";

  signInLink.style.display = "inline-block";
  signUpLink.style.display = "inline-block";
  logoutBtn.style.display = "none";
}

// 👉 LOGOUT
logoutBtn?.addEventListener("click", () => {
  // 🔥 REMOVE BOTH CARTS (important)
  localStorage.removeItem("cartProductLS");   // ✅ main cart
  localStorage.removeItem("currentUser");

  location.reload();
});

