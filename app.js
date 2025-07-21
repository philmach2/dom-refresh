const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";

const section = document.querySelector("section");
const paragraph = document.createElement("p");
paragraph.textContent = "We hope you enjoyed the ride.";

section.appendChild(paragraph);

const text = document.createTextNode(" - the GOAT.");

const linkParagraph = document.querySelector("p");
linkParagraph.appendChild(text);

// section.appendChild(linkParagraph);
// section.removeChild(linkParagraph);
// linkParagraph.remove();

paragraph.style.color = "white";
paragraph.style.backgroundColor = "black";
paragraph.style.padding = "10px";
paragraph.style.width = "250px";
paragraph.style.textAlign = "center";
