const links = [
  {
    name: "Experience",
    link: "#experience",
    class: "experience",
  },
  {
    name: "Projects",
    link: "#projects",
    class: "projects",
  },
  {
    name: "Blogs",
    link: "#blogs",
    class: "blogs",
  },
  {
    name: "Resume",
    link: "#resume",
    target: "_blank",
    class: "resume",
  },
  {
    name: "Contact",
    link: "#contact",
    class: "contact",
  },
];

const themes = {
  dark: {
    "--color-bg-primary": "#222222",
    "--color-text-primary": "#f0f0f0",
    "--color-heading-primary": "#92E3A9",
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

export { links, themes };
