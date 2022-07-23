const form = document.getElementById("form");
const list = document.getElementById("listcontainer");
const inputs = document.getElementById("todo");

inputs.addEventListener("input", (e) => {
  value = inputs.value;
  console.log(inputs.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<p>${value}</p>`;
});

list.addEventListener("click", () => {
  list.remove();
});
