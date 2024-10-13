import React from "react";
import { render, screen } from "@testing-library/react";
import Footer, { footerTestId, footerIconTestId } from ".";
import { homePage } from "../../data";
import { Provider } from "react-redux";
import store from "../../store";

describe("test Footer component", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Footer />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(footerTestId)).toBeDefined();
		expect(screen.getByTestId(footerIconTestId)).toBeDefined();
	});

	it('should display component text"', () => {
		const footerElement: HTMLElement = screen.getByTestId(footerTestId);
		expect(
			footerElement.innerHTML.includes(homePage.footer_information),
		).toBeDefined();
	});
});
