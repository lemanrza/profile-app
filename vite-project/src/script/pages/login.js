import controller from "../services/request.js";
import { endpoints } from "../services/api.js";

const loginForm = document.querySelector("#login-form");

const loginInputs = {
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const apiResponse = await controller.getAll(endpoints.users);
  const checkUser = apiResponse.data.find((i) => {
    return (
      i.email == loginInputs.email.value &&
      i.password == loginInputs.password.value
    );
  });
  if (checkUser) {
    localStorage.setItem("userId", JSON.stringify(checkUser.id));
    window.location.replace("http://localhost:5176/user.html");
  } else {
    window.alert("incorrect pasword or email");
  }
});
