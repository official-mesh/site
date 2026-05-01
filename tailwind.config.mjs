import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f10",
        surface: "#161617",
        line: "#26262a",
        muted: "#8a8a85",
        fg: "#e8e6e1",
        accent: "#d8a657",
      },
      fontFamily: {
        sans: ["'Commit Mono'", "ui-monospace", ...defaultTheme.fontFamily.mono],
        mono: ["'Commit Mono'", "ui-monospace", ...defaultTheme.fontFamily.mono],
        code: ["'Commit Mono'", "ui-monospace", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tightish: "-0.012em",
      },
      maxWidth: {
        content: "62rem",
      },
    },
  },
  plugins: [],
};
