import type { Config } from "tailwindcss";
const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    darkMode: "selector" ,
    theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        fontSize: {
          "20": "20px",
        },
        keyframes: {
            'caret-blink': {
                '0%,70%,100%': { opacity: '1' },
                '20%,50%': { opacity: '0' },
            },
            'height-in': {
                '0%': { height: '0' },
                '100%': { height: 'calc(100%-12px)' },
            },
        },
        animation: {
            'caret-blink': 'caret-blink 1.2s ease-out infinite',
            'height-in': 'height-in 0.3s ease-out',

        },
    },
    colors: {
        "border": "var(--border)",
      "transparent": "transparent",
      "neutral": {
       "0": "#ffffff",
       "50": "#f5f7fa",
       "100": "#f2f5f8",
       "200": "#e1e4ea",
       "300": "#cacfd8",
       "400": "#99a0ae",
       "500": "#717784",
       "600": "#525866",
       "700": "#2b303b",
       "800": "#222530",
       "900": "#181b25",
       "950": "#0e121b"
      },
      "blue": {
       "50": "#ebf1ff",
       "100": "#d5e2ff",
       "200": "#c0d5ff",
       "300": "#97baff",
       "400": "#6895ff",
       "500": "#335cff",
       "600": "#3559e9",
       "700": "#2547d0",
       "800": "#1f3bad",
       "900": "#182f8b",
       "950": "#122368"
      },
      "orange": {
       "50": "#fff1eb",
       "100": "#ffe3d5",
       "200": "#ffd5c0",
       "300": "#ffba97",
       "400": "#ff9a68",
       "500": "#ff8447",
       "600": "#e97135",
       "700": "#d05e25",
       "800": "#ad4e1f",
       "900": "#8b3e18",
       "950": "#682f12"
      },
      "red": {
       "50": "#ffebec",
       "100": "#ffd5d8",
       "200": "#ffc0c5",
       "300": "#ff97a0",
       "400": "#ff6875",
       "500": "#fb3748",
       "600": "#e93544",
       "700": "#d02533",
       "800": "#ad1f2b",
       "900": "#8b1822",
       "950": "#681219"
      },
      "green": {
       "50": "#e0faec",
       "100": "#d0fbe9",
       "200": "#c2f5da",
       "300": "#84ebb4",
       "400": "#3ee089",
       "500": "#1fc16b",
       "600": "#1daf61",
       "700": "#178c4e",
       "800": "#1a7544",
       "900": "#16643b",
       "950": "#0b4627",
       "alpha": {
       "10": "hsla(148, 72%, 44%, 0.1)",
       "16": "hsla(148, 72%, 44%, 0.16)",
       "24": "hsla(148, 72%, 44%, 0.24)"
      },
      },
      
      "yellow": {
       "50": "#fffaeb",
       "100": "#ffefcc",
       "200": "#ffecc0",
       "300": "#ffe097",
       "400": "#ffd268",
       "500": "#f6b51e",
       "600": "#e6a819",
       "700": "#c99a2c",
       "800": "#a78025",
       "900": "#86661d",
       "950": "#624c18"
      },
      "purple": {
       "50": "#efebff",
       "100": "#dcd5ff",
       "200": "#cac0ff",
       "300": "#a897ff",
       "400": "#8c71f6",
       "500": "#7d52f4",
       "600": "#693ee0",
       "700": "#5b2cc9",
       "800": "#4c25a7",
       "900": "#3d1d86",
       "950": "#351a75"
      },
      "sky": {
       "50": "#ebf8ff",
       "100": "#d5f1ff",
       "200": "#c0eaff",
       "300": "#97dcff",
       "400": "#68cdff",
       "500": "#47c2ff",
       "600": "#35ade9",
       "700": "#2597d0",
       "800": "#1f7ead",
       "900": "#18658b",
       "950": "#124b68"
      },
      "pink": {
       "50": "#ffebf4",
       "100": "#ffd5ea",
       "200": "#ffc0df",
       "300": "#ff97cb",
       "400": "#ff68b3",
       "500": "#fb4ba3",
       "600": "#e9358f",
       "700": "#d0257a",
       "800": "#ad1f66",
       "900": "#8b1852",
       "950": "#68123d"
      },
      "teal": {
       "50": "#e4fbf8",
       "100": "#d0fbf5",
       "200": "#c2f5ee",
       "300": "#84ebdd",
       "400": "#3fdec9",
       "500": "#22d3bb",
       "600": "#1daf9c",
       "700": "#178c7d",
       "800": "#1a7569",
       "900": "#16645a",
       "950": "#0b463e"
      },
      "primary": {
       "Dark": "#1f3bad",
       "Darker": "#2547d0",
       "Base": "#335cff"
      },
      "background": {
       "Strong": "var(--background-strong)",
       "Surface": "var(--background-surface)",
       "Sub": "var(--background-sub)",
       "Soft": "var(--background-soft)",
       "Weak": "var(--background-weak)",
       "White": "var(--background-white)"
      },
      "text": {
       "Strong": "var(--text-strong)",
       "Sub": "var(--text-sub)",
       "Soft": "var(--text-soft)",
       "Disabled": "var(--text-disabled)",
       "White": "var(--text-white)"
      },
      "stroke": {
       "Strong": "var(--stroke-strong)",
       "Sub": "var(--stroke-sub)",
       "Soft": "var(--stroke-soft)",
       "White": "var(--stroke-white)"
      },
      "icon": {
       "Strong": "var(--icon-strong)",
       "Sub": "var(--icon-sub)",
       "Soft": "var(--icon-soft)",
       "Disabled": "var(--icon-disabled)",
       "White": "var(--icon-white)"
      },
      "faded": {
       "Dark": "var(--faded-dark)",
       "Base": "var(--faded-base)",
       "Light": "var(--faded-light)",
       "Lighter": "var(--faded-lighter)"
      },
      "information": {
       "Dark": "var(--information-dark)",
       "Base": "var(--information-base)",
       "Light": "var(--information-light)",
       "Lighter": "var(--information-lighter)"
      },
      "warning": {
       "Dark": "var(--warning-dark)",
       "Base": "var(--warning-base)",
       "Light": "var(--warning-light)",
       "Lighter": "var(--warning-lighter)"
      },
      "error": {
       "Dark": "var(--error-dark)",
       "Base": "var(--error-base)",
       "Light": "var(--error-light)",
       "Lighter": "var(--error-lighter)"
      },
      "success": {
       "Dark": "var(--success-dark)",
       "Base": "var(--success-base)",
       "Light": "var(--success-light)",
       "Lighter": "var(--success-lighter)"
      },
      "away": {
       "Dark": "var(--away-dark)",
       "Base": "var(--away-base)",
       "Light": "var(--away-light)",
       "Lighter": "var(--away-lighter)"
      },
      "feature": {
       "Dark": "var(--feature-dark)",
       "Base": "var(--feature-base)",
       "Light": "var(--feature-light)r",
       "Lighter": "var(--feature-lighter)",
      },
      "verified": {
       "Dark": "var(--verified-dark)",
       "Base": "var(--verified-base)",
       "Light": "var(--verified-light)",
       "Lighter": "var(--verified-lighter)"
      },
      "highlighted": {
       "Dark": "var(--highlighted-dark)",
       "Base": "var(--highlighted-base)",
       "Light": "var(--highlighted-light)",
       "Lighter": "var(--highlighted-lighter)"
      },
      "stable": {
       "Dark": "var(--stable-dark)",
       "Base": "var(--stable-base)",
       "Light": "var(--stable-light)",
       "Lighter": "var(--stable-lighter)"
      }
    
    },
    "borderRadius": {
      "0": "0px",
      "4": "4px",
      "8": "8px",
      "16": "16px",
      "24": "24xpx",
      "full": "9999px",
        "10": "10px"
 }
  },
  plugins: [],
};
export default config;
