import { fixupConfigRules } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ['**/dist', '**/.eslintrc.cjs'],
  }, ...fixupConfigRules(compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  )), 
  {
    plugins: {
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },

    rules: {
      indent: ['error', 2],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-console': 'error',
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true }],

      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
      }],
    },
  }
];