import globals from "globals";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";

// Plugins
import js from "@eslint/js";
import ts from "typescript-eslint";
//@ts-expect-error missing types
import a11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

// Gitignore
const gitignorePath = fileURLToPath(new URL("../.gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  globalIgnores(["dist", "build", ".react-router"]),
  js.configs.recommended,
  a11y.flatConfigs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
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
