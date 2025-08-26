import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // ensures correct paths for assets in production
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // keeps @ pointing to client/src
    },
  },
  build: {
    outDir: "dist", // ensures build output goes to client/dist
  },
});
