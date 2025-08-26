import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", // relative paths to avoid 404 on deployed resources
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",   // folder Vercel serves
    assetsDir: "assets",
  },
  server: {
    port: 5173,       // dev server port
  },
});
