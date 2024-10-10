import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomItemList, { customItemListTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";

describe("test customItemList component", () => {
	const item = {
		descriptions: ["title text", "subtitle text", "https://certification.pl/"],
	};
	beforeEach(() => {
		render(
			<Provider store={store}>
				<CustomItemList item={item} />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(customItemListTestId)).toBeDefined();
	});
	it('should display component text"', () => {
		item.descriptions.forEach((element) => {
			expect(screen.getByText(element)).toBeDefined();
		});
	});
});
