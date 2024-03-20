module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/function-component-definition': 0,

    'no-unused-vars': 1,
    'arrow-body-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-wrap-multilines': 0,
    'import/order': 1,
    'react/self-closing-comp': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/require-default-props': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/button-has-type': 1,
    'react/jsx-props-no-spreading': 1,
    'no-shadow': 0,
  },
  globals: {
    __IS_DEV__: true,
  },
};
