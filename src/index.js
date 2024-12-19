import "./styles.css";
import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
homePage();

home.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  homePage();
});

menu.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  menuPage();
});

about.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  aboutPage();
});
