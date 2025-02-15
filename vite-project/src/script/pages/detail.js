import { endpoints } from "../services/api.js";
import controller from "../services/request.js";
const signInhdr = document.querySelector(".signIn")
const logInhdr = document.querySelector(".logIn")
const imgProfile = document.querySelector(".imgProfile")
const imagePerson = document.querySelector(".imagePerson")

window.addEventListener("DOMContentLoaded", async function () {
    signInhdr.textContent = "Sign Up"
    logInhdr.style.display = "none"
    const id = JSON.parse(localStorage.getItem("userId"));
    const apiResponse = await controller.getAll(endpoints.users);
    const checkUser = apiResponse.data.find((x) => x.id == id);
    if (!id) {
        this.window.location.href = "./login.html"
    }
    else {
        imgProfile.style.display = "flex"
        imagePerson.src = checkUser.profileImage;
        const formContainer = this.document.querySelector(".form-container")
        formContainer.innerHTML = ` <div class="bg-white overflow-hidden shadow rounded-lg border py-6">
        <div class="py-2 sm:px-6">
          <div style="width: 50px; height: 50px;">
            <img src="${checkUser.profileImage}" alt="">
          </div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            ${checkUser.username} Profile
          </h3>
        </div>
        <div class="border-t border-gray-200 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="full-name">
              ${checkUser.fullName}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                User Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="username">
              ${checkUser.username}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="email">
              ${checkUser.email}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Bio
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="bio">
${checkUser.bio}
              </dd>
            </div>
          </dl>
        </div>
      </div>`
    }

})