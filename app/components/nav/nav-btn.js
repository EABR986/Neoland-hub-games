



export const randomColor=()=> {
const button = document.querySelector(".change-color");

button.addEventListener("click", (e) => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(backgroundColor);
  
    document.body.style.background = backgroundColor;
    });
};

