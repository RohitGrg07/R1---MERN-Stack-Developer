/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1115",
        card: "#151822",
        "card-foreground": "#e6e6e6",
        primary: "#6366f1",
        "primary-hover": "#4f46e5",
        "primary-foreground": "#ffffff",
        muted: "#9aa0ab",
        "muted-foreground": "#9aa0ab",
        border: "#24283a",
        success: "#22c55e",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
      }
    },
  },
  plugins: [],
};
