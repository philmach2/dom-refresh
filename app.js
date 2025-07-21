const ulSelect = document.querySelector("ul");
const inputSelect = document.querySelector("input");
const buttonSelect = document.querySelector("button");

buttonSelect.addEventListener("click", () => {
  const inputValue = inputSelect.value;

  const createList = document.createElement("li");
  const createSpan = document.createElement("span");
  const createButton = document.createElement("button");

  createSpan.innerText = inputValue;
  createButton.textContent = "Delete";

  createList.appendChild(createSpan);
  createList.appendChild(createButton);

  ulSelect.appendChild(createList);

  createButton.addEventListener("click", () => {
    createList.remove();
    inputSelect.focus();
  });

  inputSelect.value = "";
  inputSelect.focus();
});
