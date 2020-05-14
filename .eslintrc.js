const {
  rules: typescriptBaseRules,
} = require('eslint-config-airbnb-typescript/lib/shared');

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  globals: {
    mapboxgl: true,
    firebase: true,
    __DEV__: true,
    __PROD__: true,
  },
  rules: {
    'implicit-arrow-linebreak': OFF,
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'react/jsx-filename-extension': OFF,
    'no-bitwise': OFF,
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-multi-assign': OFF,
    'no-plusplus': OFF,
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    curly: ['error', 'multi-line'],
    'no-nested-ternary': OFF,
    'no-continue': OFF,
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-cond-assign': ['error', 'except-parens'],
    'max-len': OFF,
    'no-underscore-dangle': OFF,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 7,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 7,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 7,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': OFF,
    quotes: OFF,
    'function-paren-newline': OFF,
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'after',
          '&&': 'ignore',
        },
      },
    ],
    'no-trailing-spaces': OFF,
    'eol-last': OFF,
    'lines-between-class-members': OFF,
    'no-confusing-arrow': OFF,
    'nonblock-statement-body-position': OFF,
    'no-restricted-globals': OFF,

    'import/no-extraneous-dependencies': OFF,
    'import/extensions': OFF,
    'import/no-unresolved': OFF,
    'import/first': OFF,
    'import/prefer-default-export': OFF,
    'import/order': OFF,
    'import/no-cycle': OFF,
    'import/named': OFF,
    'import/no-dynamic-require': OFF,
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '@emotion/core',
          '@src/globalUtils/repeatArray',
          'os',
          '@emotion/styled/types/base',
        ],
        paths: [
          {
            name: 'polished',
            importNames: ['rgba', 'tint', 'shade'],
            message: "Please import Utils from '@jestor/utils' instead.",
          },
          {
            name: 'react-router-dom',
            importNames: ['Link'],
            message: 'Please use the custom link implementation.',
          },
        ],
      },
    ],
    'valid-typeof': OFF,
    'no-console': 'error',
    'global-require': OFF,

    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/require-default-props': OFF,
    'react/no-unused-prop-types': 1,
    'react/prop-types': OFF,
    'react/no-array-index-key': OFF,
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-indent': OFF,
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'ignore',
        prop: 'parens-new-line',
      },
    ],
    'react/destructuring-assignment': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-curly-newline': OFF,
    // 'react/button-has-type': OFF,
    'react/no-children-prop': OFF,

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/anchor-has-content': OFF,
    'jsx-a11y/control-has-associated-label': OFF,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/prefer-interface': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-use-before-define': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    'space-before-function-paren': OFF,
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    /* jest */
    'jest/expect-expect': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
      },
    },
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
};
