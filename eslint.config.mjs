// @ts-check

import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

/**
 * @type {Array<import('typescript-eslint').ConfigWithExtends>}
 */
export const base = [
  //
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {},
  },
  {
    files: ['**.config.{js,cjs,mjs}', './*.{js,cjs,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
  {
    ignores: [
      //
      '**/dist/**',
      '**/node_modules/**',
    ],
  },
]

export default tseslint.config(...base)
