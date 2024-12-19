import "./styles.css";
import { homePage } from "./homepage.js";

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
