module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: [
    'stylelint-order',
    // 'stylelint-scss',
    'stylelint-selector-bem-pattern',
  ],
  rules: {
    indentation: 4,
    'selector-class-pattern': null,
    'order/properties-alphabetical-order': true,
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always-single-line',
    'max-nesting-depth': 3,
    'scss/no-global-function-names': null,
    'number-leading-zero': 'always',
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'scss/dollar-variable-colon-space-after': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'max-line-length': [120, { ignore: 'comments' }],
    'custom-property-pattern': null,
    'declaration-colon-newline-after': null,
  },

  // Easier to set this than getting all the other tooling to respect that
  // we want indentation of 4
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        indentation: 2,
        'string-quotes': 'single',
      },
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
