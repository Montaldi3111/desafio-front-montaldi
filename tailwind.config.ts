import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "graySlate": "#3A3A3A",
        "ylw": "#FAE208",
        "ylwBlck": "#C0AD06",
        "blck": "#181818",
        "lightGray": "#E3DFCF",
        "skyBlue": "#D2FFEC",
        "overlay": "#808080"
      },
      fontFamily: {
        "head1": ["Archive", "sans-serif"],
        "body": ["Archive", "sans-serif"],
      },
      borderRadius: {
        xs: "10px",
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
        "tablet": "500px",
        "desktop": "768px"
      }
    }
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px", // esto me genera error si text-md, por eso text-[16px]
    lg: "20px",
    "xl": "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "56px",
    "6xl": "64px",
  },
  plugins: [],
};
export default config;
