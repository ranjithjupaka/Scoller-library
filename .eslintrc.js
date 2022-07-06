module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
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
  plugins: ['jest', 'react', '@typescript-eslint'],
  rules: {
    // quotes: ['error', 'double'],
    semi: 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-throw-literal': 'off',
    'linebreak-style': [0, 'error', 'windows'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
