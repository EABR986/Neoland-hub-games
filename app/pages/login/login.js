const app = document.querySelector("#app");
export const paintLogin = () => {
  const loginDiv = `
    <div class="login">
        <h1>Login</h1>
        <input id="input" type="text" placeholder="Username">
        <button id="btn-login" class="btn-login"> Login &#9997</button>
    </div>
`;

  app.innerHTML = loginDiv;
};
