module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "space-before-function-paren": 0,
    "no-console": "off",
    "no-debugger": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
