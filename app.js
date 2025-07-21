const ulSelect = document.querySelector("ul");
const inputSelect = document.querySelector("input");
const buttonSelect = document.querySelector("button");

// function post() {
//   console.log(input.value);
// }

buttonSelect.addEventListener("click", () => {
  const createList = document.createElement("li");
  const createSpan = document.createElement("span");
  const createButton = document.createElement("button");

  inputSelect.value;
  createList.appendChild(createSpan);
  createSpan.innerText = inputSelect.value;
  createList.appendChild(createButton);
  createButton.textContent = "Delete";
  ulSelect.appendChild(createList);
  inputSelect.value = "";
});
