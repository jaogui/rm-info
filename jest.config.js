module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', './next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.ts(x)'],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
}