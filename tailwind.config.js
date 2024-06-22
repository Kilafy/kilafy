/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

// ----------------------------------- [ Components ] -----------------------------------
// Text components
function generateResponsiveStyles(baseSize, scaleFactor) {
  return {
    fontSize: `${baseSize}px`,
    lineHeight: `${Math.round(baseSize * 1.2)}px`,
    "@screen md": {
      fontSize: `${Math.round(baseSize * scaleFactor)}px`,
      lineHeight: `${Math.round(baseSize * scaleFactor * 1.2)}px`,
    },
    "@screen lg": {
      fontSize: `${Math.round(baseSize * scaleFactor ** 2)}px`,
      lineHeight: `${Math.round(baseSize * scaleFactor ** 2 * 1.2)}px`,
    },
    "@screen xl": {
      fontSize: `${Math.round(baseSize * scaleFactor ** 3)}px`,
      lineHeight: `${Math.round(baseSize * scaleFactor ** 3 * 1.2)}px`,
    },
  };
}

const baseFontSizes = {
  h1: 47.78,
  h2: 39.81,
  h3: 33.18,
  h4: 27.65,
  h5: 23.04,
  h6: 19.2,
  p: 16,
  small: 13.33,
};

const scaleFactor = 1.125;

const textComponents = Object.keys(baseFontSizes).reduce((acc, key) => {
  const baseSize = baseFontSizes[key];
  const styles = generateResponsiveStyles(baseSize, scaleFactor);

  if (key === "p" || key === "small") {
    acc[`.${key}`] = {
      "@apply font-raleway": {},
      ...styles,
    };
  } else {
    acc[`.${key}`] = {
      "@apply font-baskerville font-bold": {},
      ...styles,
    };
  }
  return acc;
}, {});

// Other components (Example)
const otherComponents = {
  ".containerExample": {
    "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-[60px] xl:max-w-[87.5rem]":
      {},
  },
  ".imgBackground": {
    "@apply bg-cover bg-center": {},
  },
};

const components = {
  ...textComponents,
  ...otherComponents,
};

// ----------------------------------- [ Tailwind Config ] -----------------------------------
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baskerville: ["var(--font-baskerville)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
      },
      colors: {
        color: {
          1: "#F0C800",
          2: "#F5F5F5",
          3: "#131212",
          4: "#6D72C3",
        },
      },
      screens: {
        "3xl": "1900px",
      },
      animation: {
        fadeInUp: "fadeInUp 0.3s ease-out",
        slideIn: "slideIn 0.3s ease-out",
        bounce: "bounce 1.5s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(20%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-8%)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      // Base styles
      addBase({});

      // Components
      addComponents(components);

      // Utilities
      addUtilities({});
    }),
  ],
};
