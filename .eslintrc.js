module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard",
    "plugin:prettier/recommended",
    "vue-global-api",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "no-unused-vars": 0,
      },
    },
  ],
};
