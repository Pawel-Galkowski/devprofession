import { Config } from "jest";

const config: Config = {
	verbose: true,
	clearMocks: true,
	collectCoverage: true,
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(j|t)sx?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy",
	},
	coverageReporters: ["cobertura", "json", "lcov", "text"],
	transformIgnorePatterns: ["node_modules/*"],
	coverageProvider: "v8",
	coverageDirectory: "./coverage",
	setupFilesAfterEnv: [
		"@testing-library/jest-dom",
		"./src/utils/intersectionObserverMock",
	],
	collectCoverageFrom: [
		"**/*.{ts,tsx}",
		"!**/node_modules/**",
		"!**/styles.ts",
		"!**/assets/**",
	],
};

export default config;
