// auth.js

// GET users from localStorage
const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// SAVE users
const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// SIGN UP
export const signupUser = (name, email, password) => {
  let users = getUsers();

  // check if already exists
  let userExists = users.find(user => user.email === email);
  if (userExists) {
    return { success: false, message: "User already exists" };
  }


  let newUser = { name, mobile, email, address, password };
  users.push(newUser);
  saveUsers(users);

  return { success: true, message: "Signup successful" };
};

// LOGIN
export const loginUser = (email, password) => {
  let users = getUsers();

  let user = users.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  // store current user
  localStorage.setItem("currentUser", JSON.stringify(user));

  return { success: true, message: "Login successful", user };
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

// GET CURRENT USER
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};