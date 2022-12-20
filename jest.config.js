module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      isolatedModules: true
    },
  }
};
