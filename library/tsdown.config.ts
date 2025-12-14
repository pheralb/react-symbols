import { defineConfig, type UserConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.tsx",
    "files/index": "src/files.tsx",
    "folders/index": "src/folders.tsx",
    "utils/index": "src/utils/index.tsx",
  },
  format: ["esm"],
  dts: true,
  minify: true,
  treeshake: true,
  external: ["react"],
  outDir: "build",
  clean: true,
}) as UserConfig;
