import { paintApi } from "../../pages/poke-api/poke-api";
import { backDiv } from "../pokeApi/backBtn";

export const pokeApiButton = (e) => {
    const button = document.querySelector("#pokemon-api");
    const app = document.querySelector("#app");
    // esto usarlo una vez ya este mandado el formulario localStorage.clear();
    button.addEventListener("click", (e) => {
      const inputName = localStorage.getItem("username");
        window.alert(`Lets go and catch them all!! ${inputName}!`);
      app.innerHTML = "";
      paintApi()
    backDiv()
      });
  
  
    }


