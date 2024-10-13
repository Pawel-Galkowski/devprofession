import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard, { projectCardTestId } from ".";
import { projects } from "../../data";
import { Provider } from "react-redux";
import store from "../../store";

describe("test ProjectCard component", () => {
	const projectInformation = projects[0];
	beforeEach(() => {
		render(
			<Provider store={store}>
				<ProjectCard repo={projectInformation} />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(projectCardTestId)).toBeDefined();
	});

	it('should display component text"', () => {
		const cardComponent = screen.getByTestId(projectCardTestId);
		expect(
			screen.queryAllByRole("heading", { name: projectInformation.name }),
		).toBeDefined();
		expect(screen.getByText(projectInformation.description)).toBeDefined();
		expect(cardComponent.innerHTML.includes("Technologies:")).toBeDefined();
	});

	it('should display buttons"', () => {
		const cardComponent: HTMLElement = screen.getByTestId(projectCardTestId);
		// screen.debug();
		const buttonComponentList = cardComponent.querySelectorAll("a");
		expect(buttonComponentList.length).toBe(2);
		expect(buttonComponentList[0].innerHTML).toBe("Github");
		expect(buttonComponentList[1].innerHTML).toBe("Live");
	});
});
