module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  plugins: [
    'jest',
    'svelte3'
  ],
};
