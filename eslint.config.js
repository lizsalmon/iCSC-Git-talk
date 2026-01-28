import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  ignores: [
    'node_modules/**/*',
    '**/*.yaml',
    '**/*.yml',
    '**/*.md',
    'backends-templates/backends.json',
    // ...globs
  ],
  rules: {
    'arrow-parens': [
      0,
      'as-needed',
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/no-mutating-props': 1,
    'no-console': 0,
    'sort-imports': [
      1,
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],
    'import/order': 0,
    'perfectionist/sort-imports': 0,
    'vue/script-setup-uses-vars': 0,
  },
})
