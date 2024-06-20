import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lofi": "url('/images/lofi_background.jpeg')",
      },

      keyframes: {
        lofiPulse : {
          "50%": {'opacity': '0.5'},
        },
        meteor : {
          "0%": { transform: "rotate(215deg) translateX(0)", 'opacity': '1 '},
          "70%": { 'opacity': '1 '},
          "100%": {
            transform: "rotate(215deg) translateX(-600px)",
            'opacity': '0',
          },
        }
      },

      animation: {
        lofiPulse: "lofiPulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        meteor: "meteor 5s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
