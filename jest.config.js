const baseConfig = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  cacheDirectory: "<rootDir>/.jest-cache",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: false,
            decorators: false,
            dynamicImport: true,
          },
          transform: null,
          target: "es2021",
          loose: false,
          externalHelpers: true,
          keepClassNames: true,
        },
      },
    ],
  },
};

module.exports = {
  coverageReporters: ["lcov", "text-summary"],
  projects: [
    {
      ...baseConfig,
      displayName: "unit-tests",
      testMatch: ["<rootDir>/src/**/__tests__/**/*.test.js"],
    },
  ],
};
