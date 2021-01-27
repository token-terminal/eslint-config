module.exports = {
  parser: "babel-eslint",
  extends: ["standard", "standard-jsx", "standard-react", "prettier"],
  rules: {
    "no-console": [1, { allow: ["info", "warn", "error", "time", "timeEnd"] }],
    "no-alert": 1,
    "no-debugger": 1,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
  },
};
