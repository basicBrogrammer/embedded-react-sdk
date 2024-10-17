import type { JestConfigWithTsJest } from 'ts-jest'

/**
 * Jest Configuration.
 *
 * @see https://jestjs.io/docs/configuration
 */
export default <JestConfigWithTsJest>{
  roots: ['./src', './test'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  coverageProvider: 'v8',
  collectCoverage: false,
  collectCoverageFrom: ['./src/{helpers,utils}/**/*.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.ts'],
}
