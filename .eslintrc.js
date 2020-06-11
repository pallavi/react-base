module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  ignorePatterns: ['node_modules/'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '16'
    }
  },
  extends: [
    'plugin:react/recommended'
  ],
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'indent': [2, 2, { 'SwitchCase': 1, 'MemberExpression': 0 }],
    'jsx-quotes': [2, 'prefer-double'],
    'keyword-spacing': 2,
    'no-console': 2,
    'no-extra-semi': 2,
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0 }],
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration: true,
        VariableDeclarator: true
      }
    }],
    'no-trailing-spaces': 2,
    'no-unused-vars': 2,
    'object-curly-spacing': [2, 'always'],
    'padded-blocks': [2, { 'classes': 'never' }],
    'quotes': [2, 'single'],
    'react/boolean-prop-naming': 2,
    'react/react-in-jsx-scope': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-props-no-multi-spaces': 2,
    'semi': 2,
    'space-before-function-paren': 2,
    'space-in-parens': 2
  }
};
