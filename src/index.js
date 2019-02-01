import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton("Yay! A button!");
button.style = makeColorStyle("blue");
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(nav(), top, bottom, makeColorStyle("cyan"));
