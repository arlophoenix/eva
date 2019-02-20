// https://github.com/iamturns/create-exposed-app/blob/master/jest.config.js
module.exports = {
  collectCoverageFrom: ["src/**/*.{js,ts}", "!src/**/*.d.ts"],
  reporters: ["default", "jest-junit"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};
