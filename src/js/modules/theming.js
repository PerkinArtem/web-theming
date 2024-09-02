export class Theming {
    #html;
    #htmlRootAttribute;
    #defaultThemes;
    constructor(config = {}) {
        this.#html = document.documentElement;
        this.#htmlRootAttribute = 'data-theme';
        this.#defaultThemes = {
            light: 'light',
            dark: 'dark'
        }
        this.config = {
            ...config,
            storageKey: 'color_theme',
            detectSystemTheme: true
        }

        this.#init();
    }

    #init() {
        this.#setInitialTheme();
    }

    get currentTheme() {
        return localStorage.getItem(this.config.storageKey) ?? this.#defaultThemes.light
    }

    #setInitialTheme() {
        if (!this.config.detectSystemTheme) {
            this.setTheme(this.currentTheme);
        } else {
            this.detectSystemTheme();
        }
    }

    detectSystemTheme() {
        this.setSystemTheme();

        if(window.matchMedia){
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            colorSchemeQuery.addEventListener('change', (e) => {
                const theme = e.matches ? 'dark' : 'light';
                this.setTheme(theme)
            });
        }
    }

    setSystemTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            this.setDarkTheme();
        } else {
            this.setLightTheme();
        }
    }

    setTheme(theme) {
        localStorage.setItem(this.config.storageKey, theme);
        this.#html.setAttribute(this.#htmlRootAttribute, theme)
    }

    setLightTheme() {
        this.setTheme(this.#defaultThemes.light)
    }

    setDarkTheme() {
        this.setTheme(this.#defaultThemes.dark)
    }
}