module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/test-utils': '<rootDir>/utils/testUtils',
  },
};
