import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Applies to JS, MJS, CJS, and TS files
  },
  {
    ignores: [".node_modules/*"], // Ignore node_modules
  },
  {
    languageOptions: {
      globals: globals.browser, // Sets global context to "browser" environment
    },
  },
  pluginJs.configs.recommended, // Applies recommended ESLint rules for JavaScript
  {
    // Instead of spreading `tseslint.configs.recommended`, merge it directly
    ...tseslint.configs.recommended,
  },
  {
    rules: {
      eqeqeq: "off", // Disable eqeqeq rule
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-undef": "error",
      "no-console": "warn",

      "prefer-const": [
        "error",
        {
          ignoreReadBeforeAssign: true, // Ignore read before assignment for prefer-const
        },
      ], // Enforce prefer-const rule

      // Prettier plugin integration
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
    },
  },
  // Prettier-related configuration
  {
    extends: ["plugin:prettier/recommended"], // Enables eslint-plugin-prettier and eslint-config-prettier
  },
];
