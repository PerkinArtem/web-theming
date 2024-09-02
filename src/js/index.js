import { Theming } from "./modules/theming.js";

const theming = new Theming();

// Demo 
document.querySelector('#change-theme-to-dark').addEventListener('click', () => theming.setDarkTheme());
document.querySelector('#change-theme-to-light').addEventListener('click', () => theming.setLightTheme());