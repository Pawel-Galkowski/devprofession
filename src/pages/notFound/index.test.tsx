import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import NotFound, { notFoundPageTestId } from ".";
import { notFoundSVGTestId } from "../../assets/svg/images/NotFoundSVG";

describe("test NotFound page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<NotFound />
			</Provider>,
		);
	});
	it('should render component"', () => {
		const notFoundComponent = screen.getByTestId(notFoundPageTestId)
		expect(notFoundComponent).toBeDefined();
		expect(screen.getByTestId(notFoundSVGTestId)).toBeDefined();
		const buttonElement = notFoundComponent.querySelector('a')
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveProperty('href', window.location.href)
		expect(buttonElement?.innerHTML).toBe('Back to main page')
		expect(
			notFoundComponent.innerHTML.includes('Sorry, the page you requested could not be found'),
		).toBeDefined();
	});
});
