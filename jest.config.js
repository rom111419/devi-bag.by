require("jest-preset-angular/ngcc-jest-processor");
import("@jest/types").Config;

/** @type {import("@jest/types").Config.InitialOptions} */
module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      allowSyntheticDefaultImports: true
    }
  },
  displayName: "darwin",
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>src/app/$1",
    "^@env/(.*)$": "<rootDir>src/environments/$1",
    "^@assets/(.*)$": "<rootDir>src/assets/$1"
  }
};
