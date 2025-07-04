// apps/web/.eslintrc.js

/**
 * ESLint-Konfiguration für deine Next.js + TypeScript-App
 * Einfach in apps/web/.eslintrc.js ablegen.
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals'
  ],
  rules: {
    // React kann ab Next.js 17 automatisch JSX scopen
    'react/react-in-jsx-scope': 'off',

    // Warnung bei ungenutzten Variablen (Ignoriert _-Präfix)
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

    // React Hooks Regeln
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};