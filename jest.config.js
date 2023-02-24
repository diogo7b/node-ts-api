const { resolver } = requires('path')
const root = resolve(__dirname)
module.exports = {
    rootDir: root,
    displayName: 'root-test',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)':'<rootDir>/src/$1',
        '@test/(.*)':'<rootDir>/test/$1'
    }
}