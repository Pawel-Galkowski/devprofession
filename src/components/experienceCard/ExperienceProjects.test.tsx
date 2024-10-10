import React from "react";
import { render, screen } from "@testing-library/react";
import {
	ExperienceProjects,
	experienceProjectsTestId,
} from "./ExperienceProjects";
import { Provider } from "react-redux";
import store from "../../store";
import { experience } from "../../data";
import { customItemListTestId } from "../customItemList";
import { ExperienceDataWithProjects } from "../../types";

describe("test ExperienceProjects component", () => {
	const experienceData = (experience.data[0] as ExperienceDataWithProjects)
		.projects[0];
	beforeEach(() => {
		render(
			<Provider store={store}>
				<ExperienceProjects project={experienceData} />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(experienceProjectsTestId)).toBeDefined();
	});

	it('should display component text"', () => {
		expect(
			screen.getByRole("heading", { name: experienceData.role }),
		).toBeDefined();
		expect(screen.getByText(experienceData.duration)).toBeDefined();
		expect(
			screen.getByText(
				`Technologies & Frameworks: ${experienceData.technologies}`,
			),
		).toBeDefined();
	});

	it('should have cutomItemList component"', () => {
		expect(screen.findByTestId(customItemListTestId)).toBeDefined();
	});
});
