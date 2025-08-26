import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", // relative paths help when deploying to subdirectories or Vercel
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",       // Vercel serves this folder
    assetsDir: "assets",  // optional, keeps JS/CSS/images organized
    sourcemap: true,      // helps debug missing files
  },
  server: {
    open: true,           // opens browser automatically during dev
    port: 5173,           // dev server port
  },
});
