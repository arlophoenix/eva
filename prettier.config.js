// https://github.com/iamturns/create-exposed-app/blob/master/prettier.config.js
module.exports = {
  // Trailing commas help with git merging and conflict resolution
  trailingComma: "all",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
};
