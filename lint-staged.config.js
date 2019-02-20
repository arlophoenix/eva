// https://github.com/iamturns/create-exposed-app/blob/master/lint-staged.config.js
module.exports = {
  linters: {
    "package.json": ["yarn run format:package", "git add"],
    ".editorconfig": ["yarn run format:prettier:glob", "git add"],
    "**/*.{json,md,yaml,yml}": ["yarn run format:prettier:glob", "git add"],
    "**/*.{js,ts}": [
      "yarn run format:import:glob",
      "yarn run format:eslint:glob",
      "git add",
    ],
  },
  // The formatting tools are ordered to run sequentially
  concurrent: false,
};
