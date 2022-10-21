import { paintHub } from "../../pages/home/home";


export const loginButton = (e) => {
  const button = document.querySelector("#btn-login");
  const app = document.querySelector("#app");
  // esto usarlo una vez ya este mandado el formulario localStorage.clear();
  button.addEventListener("click", (e) => {
    const inputName = localStorage.getItem("username");
    if (inputName === null || inputName === "") {
      window.alert("Please enter a username");
    } else {
      window.alert(`Welcome to the time of your life ${inputName}!`);
    app.innerHTML = "";
    paintHub()
    }


  });
  localStorage.clear();
};
