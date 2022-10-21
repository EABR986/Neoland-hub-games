import { paintHub } from "../../pages/home/home";
import { logoutDiv } from "../home/logoutbtn";


const nav= document.querySelector("nav");
export const backDiv =() => {
    const backBtn = document.createElement("button");
        backBtn.classList.add("back-btn");
        backBtn.innerHTML = "back &#x1F44C";
        nav.append(backBtn);
        const buttonOut = document.querySelector(".logout-btn");
        const button = document.querySelector(".back-btn");
    
        button.addEventListener("click", () => {
          window.alert("SEE YOU SOON");
          paintHub();
          buttonOut.remove();
          button.remove();
          
        })
    };