module.exports = {
  root: true,
  extends: ["airbnb-base", "prettier"],
  parser: "babel-eslint",
  plugins: ["babel", "prettier"],
  settings: {
    "import/extensions": [".mjs", ".js", ".ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".ts"],
      },
    },
  },
  rules: {
    "global-require": "off",
    "no-continue": "warn",
    "no-control-regex": "warn",
    "no-nested-ternary": "warn",
    "no-restricted-syntax": [
      "warn",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-script-url": "warn",
    "no-underscore-dangle": [
      "warn",
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    // TODO: waiting fix https://github.com/eslint/eslint/issues/12822
    // 'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],

    "import/extensions": [
      "error",
      "always",
      {
        mjs: "never",
        js: "never",
        ts: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: [".eslintrc.js"] },
    ],
    "import/prefer-default-export": "warn",

    "prettier/prettier": "error",
  },
};
