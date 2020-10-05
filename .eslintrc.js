module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    strict: 0,
  },
  globals: {
    strapi: true,
  },
};
