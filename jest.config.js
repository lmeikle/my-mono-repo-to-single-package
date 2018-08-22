module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/*.js'],
  resetMocks: true,
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.js',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
};
