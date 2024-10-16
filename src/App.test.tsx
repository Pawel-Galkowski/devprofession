import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { ThemeEnum, themes } from "./theme";
import { setLightTheme } from "./reducers/themeReducer";
import { footerTestId } from "./components/footer";
import { changeRgbToHexFunction } from "./utils/testUtils";
import store from "./store";

describe("test App component", () => {
	const RenderElement = () => (
		<Provider store={store}>
			<App />
		</Provider>
	);
	let rerenderElement: (ui: React.ReactNode) => void;
	beforeEach(() => {
		const { rerender } = render(<RenderElement />);
		rerenderElement = rerender;
	});
	it('should load theme"', async () => {
		const footer = screen.getByTestId(footerTestId);
		expect(footer).toBeDefined();

		expect(changeRgbToHexFunction(getComputedStyle(footer).color)).toBe(
			themes[ThemeEnum.dark].secondaryText.toLowerCase()
		);

		await act(async () => {
			store.dispatch(setLightTheme());
			rerenderElement(<RenderElement />);
		});

		expect(changeRgbToHexFunction(getComputedStyle(footer).color)).toBe(
			themes[ThemeEnum.light].secondaryText.toLowerCase()
		);
	});
});
