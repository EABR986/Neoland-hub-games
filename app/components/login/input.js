export const username = () => {
  const input = document.querySelector("#input");
  input.addEventListener("input", (e) => {
    const inputName = e.target.value;
    localStorage.setItem("username", inputName);
    console.log(inputName);
  });
};
