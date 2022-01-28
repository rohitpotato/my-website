(function () {
  function setVariables(property, color) {
    document.documentElement.style.setProperty(property, color);
  }

  const themes = {
    dark: {
      "--color-bg-primary": "#222222",
      "--color-text-primary": "#f0f0f0",
      "--spacer-margin": "19rem 0",
      "--border-color": "#ebebeb80",
    },
    light: {
      "--color-bg-primary": "#ffffff",
      "--color-text-primary": "#565656",
      "--color-heading-primary": "#92E3A9",
      "--spacer-margin": "19rem 0",
      "--border-color": "#000000",
    },
  };

  function setTheme() {
    try {
      let theme;
      if (window.localStorage.getItem("theme")) {
        theme = JSON.parse(window.localStorage.getItem("theme"));
      } else {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      const themeStyles = themes[theme];
      for (let key in themeStyles) {
        setVariables(key, themeStyles[key]);
      }
      document.body.dataset.theme = theme;
    } catch (e) {}
  }
  setTheme();
})();
