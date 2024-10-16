import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ScrollTopButton, { keyboardArrowUpTestId, scrollTopButtonTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";

describe("test ScrollTopButton component", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<ScrollTopButton />
			</Provider>
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(scrollTopButtonTestId)).toBeDefined();
		expect(screen.getByTestId(keyboardArrowUpTestId)).toBeDefined();
	});
});
