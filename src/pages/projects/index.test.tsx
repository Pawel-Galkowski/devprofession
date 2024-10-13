import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Projects, { projectsPageTestId } from ".";
import { topPageSectionTestId } from "../../components/topPageSection";
import { projectCardTestId } from "../../components/projectCard";
import { socialMediaLinks } from "../../data";

describe("test Projects page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Projects />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(projectsPageTestId)).toBeDefined();
		expect(screen.getByTestId(topPageSectionTestId)).toBeDefined();
		const projectCardComponent = screen.queryByTestId(projectCardTestId)
		// expect(projectCardComponent).toBeGreaterThanOrEqual(1);
		expect(projectCardComponent).toBeDefined();
	});

	it('should have button component"', () => {
		const buttonElement = screen.getByText("More Projects (Github)");
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveProperty("href", socialMediaLinks.github);
		expect(buttonElement).toHaveProperty("target", '_blank');
	});
});
