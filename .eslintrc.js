module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parsers: ["@typescript-eslint/parser", "vue", "vue-eslint-parser"]
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    semi: [0, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always"
        }
      }
    ],
    "prettier/prettier": ["error", { semi: true }]
  }
};
