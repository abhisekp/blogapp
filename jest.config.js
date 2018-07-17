module.exports = {
  bail: true,
  verbose: true,
  notify: true,
  collectCoverage: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/config/', '/__fixtures__/'],
  roots: ['<rootDir>/src/', '<rootDir>/__tests__/'],
};
