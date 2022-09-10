module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "standard",
    "standard-jsx",
    "standard-react",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  rules: {
    "no-console": [1, { allow: ["info", "warn", "error", "time", "timeEnd"] }],
    "no-alert": 1,
    "no-debugger": 1,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-curly-newline": 0,
    "react/react-in-jsx-scope": 0,
    "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true }],
    "@typescript-eslint/no-unused-vars": "error",
  },
};
