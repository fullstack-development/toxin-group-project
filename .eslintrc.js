module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': ['error', { ts: 'never' }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-unused-expressions': 'off',
    'lines-between-class-members': 'off',
    'import/order': ['warn',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
