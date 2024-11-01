import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "./",
  build:{
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures changes are detected in some environments
    },
  },
});
