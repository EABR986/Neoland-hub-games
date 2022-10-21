import "./style.css";
import { paintHub } from "../../pages/home/home";

const app = document.querySelector("#app");

export const paintApi = () => {
  const inputName = localStorage.getItem("username");
  const pokeDiv = `
    <div>
        <h1>lets search and play with some pokemon &#128526 ${inputName} !!!</h1>
    </div>
    <div class="container-pokemon"></div>
        
    </div>
`;


   
app.innerHTML = pokeDiv;
}