module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "prettier/@typescript-eslint",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
};
