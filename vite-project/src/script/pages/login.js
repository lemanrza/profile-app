import controller from "../services/request.js";
import { endpoints } from "../services/api.js";

const loginForm = document.querySelector("#login-form");
const signInhdr = document.querySelector(".signIn")
const logInhdr = document.querySelector(".logIn")
const imgProfile = document.querySelector(".imgProfile")
const imagePerson = document.querySelector(".imagePerson")


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
    signInhdr.textContent = "Sign Up"
    logInhdr.style.display="none"
    imgProfile.style.display="flex"
    imagePerson.src=checkUser.profileImage;
    window.location.replace("http://localhost:5174/user.html");
  } else {
    window.alert("incorrect pasword or email");
  }
});
