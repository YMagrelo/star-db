module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2, { ignoredNodes: ["TemplateLiteral"] }],
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/prop-types": 0,
  },
};
