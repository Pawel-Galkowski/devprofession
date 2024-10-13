import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Loader, { loaderTestId } from ".";

describe("test Loader", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Loader />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(loaderTestId)).toBeDefined();
	});
});
