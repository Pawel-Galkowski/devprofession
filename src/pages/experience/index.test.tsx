import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Experience, { experiencePageTestId } from ".";
import { topPageSectionTestId } from "../../components/topPageSection";

describe("test Experience page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Experience />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(experiencePageTestId)).toBeDefined();
		expect(screen.getByTestId(topPageSectionTestId)).toBeDefined();
		// expect(screen.getByTestId(accordionTestId)).toBeDefined();
	});
});
