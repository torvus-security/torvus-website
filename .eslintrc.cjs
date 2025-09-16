module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "tailwindcss", "import", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/no-unused-modules": [
      "warn",
      {
        missingExports: false,
        unusedExports: true,
        ignoreExports: [
          "app/**/page.tsx",
          "app/**/layout.tsx",
          "app/**/route.tsx",
          "app/sitemap.ts",
          "app/robots.ts",
        ],
      },
    ],
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/enforces-shorthand": "off",
  },
  ignorePatterns: ["*.config.js", "*.config.cjs", "node_modules/"],
  overrides: [
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "tests/**/*.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
  ],
};
