const app = document.querySelector("#app");
export const paintHub = () => {
    const inputName = localStorage.getItem("username");
  const hubDiv = `
    <div>
        <h1>Bienvenido &#128075  ${inputName} !!!</h1>
    </div>
`;

  app.innerHTML = hubDiv;
};