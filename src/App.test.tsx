import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import store from "./store";
import App from "./App";
import { ThemeEnum, themes } from "./theme";
import { setDarkTheme } from "./reducers/themeReducer";
import { footerTestId } from "./components/footer";
import { changeRgbToHexFunction } from "./utils/testUtils";

const mockStore = configureMockStore();

describe("test App component", () => {
	const mockedStore = mockStore({ value: ThemeEnum.dark });
	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<App />
			</Provider>
		);
	});
	it('should load dark theme"', () => {
		const footer = screen.getByTestId(footerTestId);
		expect(footer).toBeDefined();

		// mockedStore.dispatch(setDarkTheme());
        console.error(getComputedStyle(footer))
		expect(changeRgbToHexFunction(getComputedStyle(footer).color)).toBe(
			themes["dark"].secondaryText
		);
	});
});
