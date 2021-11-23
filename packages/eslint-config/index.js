module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier', '@typescript-eslint'],
  ignorePatterns: ['!.prettier*', '!.eslintrc'],
  rules: {}
}
