import { paintLogin } from "../login/login";


const app = document.querySelector("#app");
const nav = document.querySelector("nav");
export const paintHub = () => {
  const inputName = localStorage.getItem("username");
  const hubDiv = `
    <div>
        <h1>Bienvenido &#128075  ${inputName} !!!</h1>
    </div>
`;
  const logoutDiv = () => {
    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("logout-btn");
    logoutBtn.innerHTML = "Logout &#x1F44C";
    nav.append(logoutBtn);

    const button = document.querySelector(".logout-btn");

    button.addEventListener("click", (e) => {
      localStorage.clear();
      window.alert("You have been logged out");
      paintLogin();
    });
  };
  app.innerHTML = hubDiv;
  logoutDiv();
};
