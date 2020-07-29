module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    project: [
      './tsconfig.json'
    ],
    extraFileExtensions: ['.graphql']
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'graphql',
    'better-styled-components'
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  ignorePatterns: ["**/__generated__/*.tsx"],
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "react/jsx-props-no-spreading": ['off'],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "graphql/template-strings": ['error', {
      env: 'literal',
      schemaJson: require('./__generated__/introspection.json'),
    }],
    "jsx-a11y/anchor-is-valid": 0,
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define" : "off"
  }
};
