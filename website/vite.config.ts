import path from "path";
import { defineConfig } from "vite";

// Plugins:
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
      "@react-symbols/icons": path.resolve(__dirname, "../library/src"),
      "@react-symbols/icons/utils": path.resolve(
        __dirname,
        "../library/src/utils",
      ),
    },
  },
  plugins: [reactRouter(), tailwindcss(), devtoolsJson()],
});
