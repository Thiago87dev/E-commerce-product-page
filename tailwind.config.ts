import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorOrange: 'hsl(26, 100%, 55%)',
        colorPaleOrange: 'hsl(25, 100%, 94%)',
        colorVeryDarkBlue: 'hsl(220, 13%, 13%)',
        colorDarkGrayishBlue:' hsl(219, 9%, 45%)',
        colorGrayishBlue: 'hsl(220, 14%, 75%)',
        colorLightGrayishBlue: 'hsl(223, 64%, 98%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorBlack75opacity: 'hsla(0, 0%, 0%, 0.75)',
      },
    },
  },
  plugins: [],
} satisfies Config;
