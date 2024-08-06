import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          "graySlate": "#3A3A3A",
          "ylw": "#FAE208",
          "blck": "#181818",
          "lightGray": "#E3DFCF"
      },
      fontFamily: {
        "head1": ["Archive", "sans-serif"],
        "body": ["Archive", "sans-serif"], 
      },
      backgroundImage: {
        "home": "url(/home-img.png)"
      },
      borderRadius: {
        sm: "14px",
        md: "20px",
        lg: "28px",
        xl: "36px",
        "2xl": "40px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "56px",
      },
      screens: {
        "phone": "300px",
        "tablet": "600px",
        "desktop": "1000px"
      }
    }
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  plugins: [],
};
export default config;
