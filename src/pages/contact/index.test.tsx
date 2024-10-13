import React from "react";
import { render, screen } from "@testing-library/react";
import Contact, { contactAdditionalElemTestId, contactTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";
import { homePage } from "../../data";
import { socialMediaTestId } from "../../components/socialMedia";
import { topPageSectionTestId } from "../../components/topPageSection";

describe("test contact page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Contact />
			</Provider>
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(contactTestId)).toBeDefined();
		expect(screen.getByTestId(topPageSectionTestId)).toBeDefined();
	});

	it('should have button component"', () => {
		const buttonElement = screen.getByText("Check my resume");
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveProperty("href", homePage.resumeLink);
		expect(buttonElement).toHaveProperty("target", "_blank");
	});

	it("should display additional elements", () => {
		expect(screen.getByTestId(socialMediaTestId)).toBeDefined();
		expect(screen.getByTestId(contactAdditionalElemTestId)).toBeDefined();
	});
});
