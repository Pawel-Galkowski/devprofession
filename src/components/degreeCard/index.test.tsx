import React from "react";
import { render, screen } from "@testing-library/react";
import DegreeCard, { degreeCardTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";
import { degrees } from "../../data";
import { customItemListTestId } from "../customItemList";

describe("test degreeCard component", () => {
	const degree = degrees[0];
	beforeEach(() => {
		render(
			<Provider store={store}>
				<DegreeCard degree={degree} />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(degreeCardTestId)).toBeDefined();
	});

	it('should display component text"', () => {
		expect(screen.getByRole("heading", { name: degree.title })).toBeDefined();
		expect(screen.getByRole("heading", { name: degree.duration })).toBeDefined();
		expect(screen.getByRole("heading", { name: degree.subtitle })).toBeDefined();
	});

	it('should have cutomItemList component"', () => {
		expect(screen.findByTestId(customItemListTestId)).toBeDefined();
	});

	it('should have button component"', () => {
		const buttonElement = screen.getByText("Visit Website");
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveProperty("href", degree.website_link);
	});
});
