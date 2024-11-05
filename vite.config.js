import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  base: "./",
  build:{
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        paginaRedireccions: path.resolve(__dirname, "/src/pages/paginaRedireccions.html"),
        register: path.resolve(__dirname, "/src/pages/register.html")
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures changes are detected in some environments
    },
  },
});
