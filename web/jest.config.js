module.exports = {
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/node_modules/',
    ],
    moduleNameMapper:
    {
      '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
  
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  };
  