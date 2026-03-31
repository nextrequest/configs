const { createRequire } = require('module')
const path = require('path')

// Resolve packages from the consumer's node_modules (process.cwd),
// so this config package needs zero dependencies of its own.
const consumerRequire = createRequire(path.join(process.cwd(), 'package.json'))

const globals = consumerRequire('globals')
const neostandard = consumerRequire('neostandard')
const eslintConfigPrettier = consumerRequire('eslint-config-prettier')
const prettierPlugin = consumerRequire('eslint-plugin-prettier')
const tseslint = consumerRequire('typescript-eslint')

const config = [
  // neostandard replaces eslint-config-standard (includes n, promise, import-x plugins)
  // noStyle: true since prettier handles formatting
  ...neostandard({ noStyle: true }),

  // Prettier integration — must come after other configs to override style rules
  eslintConfigPrettier,

  {
    linterOptions: {
      // Match ESLint 8 behavior: don't report unused disable directives
      reportUnusedDisableDirectives: 'off'
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
      }
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrors: 'none'
        }
      ],
      // Enforce that interface names do not begin with an I.
      // Taken from https://typescript-eslint.io/rules/naming-convention/#enforce-that-interface-names-do-not-begin-with-an-i
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false
          }
        }
      ]
    }
  }
]

// Expose tseslint utilities for consumers that need Vue + TypeScript support
config.tsParser = tseslint.parser
config.tsPlugin = tseslint.plugin

module.exports = config
