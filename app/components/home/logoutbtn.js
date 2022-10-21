import { paintLogin } from "../../pages/login/login.js";
import { username } from "../login/input.js";
import { loginButton } from "../login/login-btn.js";

const nav= document.querySelector("nav");
  export const logoutDiv = () => {
    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("logout-btn");
    logoutBtn.innerHTML = "Logout &#x1F44C";
    nav.append(logoutBtn);

    const button = document.querySelector(".logout-btn");

    button.addEventListener("click", (e) => {
      localStorage.clear();
      window.alert("You have been logged out");
      paintLogin();
      loginButton();
      username();
      button.remove();
    });
  };