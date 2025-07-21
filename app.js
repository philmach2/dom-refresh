// named function
function alertFunction() {
  alert("Yay! You did it!");
}
const btn = document.querySelector("#btn");

// callback of alert function
btn.addEventListener("click", alertFunction);

// returning event object
btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "orange";
});

// buttons node list, similar to array
const buttons = document.querySelectorAll("button");

// add event listener to each item in node list
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
