const globals = require("globals");

module.exports = {
	settings: {
		react: {
			version: "detect",
		},
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: { globals: globals.browser },
		ignores: ["./jest.config.ts"],
		rules: {},
	},
	overrides: [
		{
			files: ["**/*.{spec, test}.*"],
			env: {
				jest: true,
			},
		},
	],
	extends: ["react-app", "react-app/jest"],
};
