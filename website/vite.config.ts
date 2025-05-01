import path from "path";
import { defineConfig } from "vite";

// Plugins:
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
  plugins: [reactRouter()],
});
