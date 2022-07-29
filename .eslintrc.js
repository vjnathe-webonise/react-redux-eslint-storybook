module.exports = {
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2],
    'linebreak-style': 1,
    'react/react-in-jsx-scope': 0, // not needed in React17,
    'no-debugger': 0
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    },
    react: {
      version: 'detect'
    }
  }
};
