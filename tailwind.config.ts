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
      },
      maxWidth: {
        'iph12': '24.375rem', // 330px를 20.625rem로 변환하여 max-w-iph12로 설정합니다.
      },
      backgroundColor: {
        'bg-neutral-150': 'background-color: rgb(244 244 244);', // 330px를 20.625rem로 변환하여 max-w-iph12로 설정합니다.
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.375em',
    }
  },
  plugins: [],
};
export default config;
