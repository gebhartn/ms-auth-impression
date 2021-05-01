// eslint-disable-next-line @typscript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// eslint-disable-next-line @typscript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig');

module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.spec.ts',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/test/jest_setup.ts'],
};
