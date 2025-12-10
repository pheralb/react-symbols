import globals from "globals";
import { dirname } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";

// Plugins
import js from "@eslint/js";
import ts from "typescript-eslint";

// Gitignore
const gitignorePath = fileURLToPath(new URL("../.gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  globalIgnores(["build"]),
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
    rules: {
      "react-refresh/only-export-components": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
]);
