import { Config } from "jest";

const config: Config = {
	verbose: true,
	clearMocks: true,
	collectCoverage: true,
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(j|t)sx?$": "ts-jest",
	},
	coverageReporters: ["json", "lcov"],
	transformIgnorePatterns: ["node_modules/*"],
	coverageDirectory: "./coverage",
	setupFilesAfterEnv: ["@testing-library/jest-dom", './src/utils/intersectionObserverMock'],
	collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**", "!**styles.ts"],
};

export default config;
