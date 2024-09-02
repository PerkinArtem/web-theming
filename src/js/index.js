import { Theming } from "./modules/theming.js";

window.theming = new Theming();

// Demo 
document.querySelector('#change-theme-to-dark').addEventListener('click', () => theming.setDarkTheme());
document.querySelector('#change-theme-to-light').addEventListener('click', () => theming.setLightTheme());
document.querySelector('#change-theme-to-system').addEventListener('click', () => theming.setSystemTheme());