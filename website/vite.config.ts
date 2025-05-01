import path from "path";
import { defineConfig } from "vite";

// Plugins:
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
      "@react-symbols/icons": path.resolve(
        __dirname,
        "../library/src/index.ts",
      ),
    },
  },
  plugins: [reactRouter(), tailwindcss()],
});
