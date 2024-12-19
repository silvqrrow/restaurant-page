import "./styles.css";
import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
homePage();

home.addEventListener("click", () => {
  content.replaceChildren();
  homePage();
});

menu.addEventListener("click", () => {
  content.replaceChildren();
  menuPage();
});

about.addEventListener("click", () => {
  content.replaceChildren();
  aboutPage();
});
