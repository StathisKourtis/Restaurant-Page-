import "./style.css";
import { loadAbout } from "./loadAbout.js";
import { loadHomePage } from "./loadHomepage.js";
import { clearScreen } from "./clearScreen.js";
import { loadMenu } from "./loadMenu.js";

document.getElementById("home").addEventListener("click", () => {
  clearScreen();
  loadHomePage();
});
document.getElementById("about").addEventListener("click", () => {
  clearScreen();
  loadAbout();
});

document.getElementById("menu").addEventListener("click", () => {
  clearScreen();
  loadMenu();
});

clearScreen();
loadHomePage();
