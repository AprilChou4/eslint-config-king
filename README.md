# eslint-config-king

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-king
[npm-url]: https://www.npmjs.com/package/eslint-config-king

## Install

```bash
yarn add eslint-config-king --dev
```

## Usage

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: "eslint-config-king",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
```
