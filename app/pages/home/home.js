
import "./style.css";
import { pokeApiButton } from "../../components/home/pokeApiBtn";
 import { logoutDiv } from "../../components/home/logoutbtn";

const app = document.querySelector("#app");

export const paintHub = () => {
  const inputName = localStorage.getItem("username");
  const hubDiv = `
    <div>
        <h1>Bienvenido &#128075  ${inputName} !!!</h1>
    </div>
    <div class="container-app">
        <div id="pokemon-api" class="container"><p> POKE API</p>  </div>
        <div id="tic-tac" class="container"><p> TIC-TAC-TOE</p>  </div>
        <div id="waka" class="container"><p> WAKA-TOPO</p>  </div>
        <div id="hangman" class="container"><p> HANG MAN</p>  </div>
        <div id="quiz" class="container"><p> QUIZ - NEO</p>  </div>
        <div id="memory" class="container"><p> MEMORY GAME</p>  </div>
        <div id="to-do" class="container"><p> TO DO LIST</p>  </div>
        <div id="bigest" class="container"><p> THE BIGEST CARD</p>  </div>
    </div>
`;

  app.innerHTML = hubDiv;
 logoutDiv();
  pokeApiButton();
};
