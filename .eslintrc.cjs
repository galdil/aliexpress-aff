module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript/base',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [2, { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],
  },
  ignorePatterns: ['*.cjs', '*.config.ts']
}
