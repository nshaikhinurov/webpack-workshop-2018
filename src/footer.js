import { red, blue } from "./button-styles";
const top = document.createElement("div");
const bottom = document.createElement("div");
top.innerText = "Top of footer";
bottom.innerText = "Bottom of footer";
top.style = blue;
bottom.style = red;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
