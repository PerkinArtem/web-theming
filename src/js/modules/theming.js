export class Theming {
    #html;
    #htmlRootAttribute;
    #defaultThemes;
    #defaultTheme;
    #currentTheme;
    constructor(config = {}) {
        this.#html = document.documentElement;
        this.#htmlRootAttribute = 'data-theme';
        this.#defaultThemes = {
            light: 'light',
            dark: 'dark',
            system: 'system'
        }
        this.config = {
            storageKey: 'color_theme',
            detectSystemTheme: true,
            ...config
        }
        this.#defaultTheme = this.#defaultThemes.light;
        this.#currentTheme = this.#defaultThemes.light;

        this.#init();
    }

    #init() {
        this.#setInitialTheme();
    }

    get currentTheme() {
        return this.#currentTheme;
    }

    get localStorageTheme() {
        return localStorage.getItem(this.config.storageKey);
    }

    #setInitialTheme() {
        if (this.config.detectSystemTheme && !this.localStorageTheme) {
            this.setSystemTheme();
            return;
        }

        this.setTheme(this.localStorageTheme ?? this.#defaultTheme);
    }

    setTheme(theme) {
        this.#currentTheme = theme;
        localStorage.setItem(this.config.storageKey, theme);
        this.#html.setAttribute(this.#htmlRootAttribute, theme)
    }

    setSystemTheme() {
        this.setTheme(this.#defaultThemes.system)
    }

    setLightTheme() {
        this.setTheme(this.#defaultThemes.light)
    }

    setDarkTheme() {
        this.setTheme(this.#defaultThemes.dark)
    }
}