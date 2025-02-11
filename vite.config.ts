import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "widget",
      fileName: (format) => `widget.${format}.js`,
    },
    target: "es2015",
  },
});
