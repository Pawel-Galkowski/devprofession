import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceCard, {
	experienceCardTestId,
	expCardNoProjectsPropTestId,
} from ".";

import { Provider } from "react-redux";
import store from "../../store";
import { experience } from "../../data";
import { experienceProjectsTestId } from "./ExperienceProjects";
import { customItemListTestId } from "../customItemList";

describe("test experienceCard component", () => {
	const experienceWithProjects = experience.data[0];
	const experienceWithoutProjects = experience.data[1];

	describe("test experienceCard with projects", () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<ExperienceCard>{experienceWithProjects}</ExperienceCard>
				</Provider>,
			);
		});
		it('should render component"', () => {
			expect(screen.getByTestId(experienceCardTestId)).toBeDefined();
		});

		it('should display component text"', () => {
			expect(
				screen.queryAllByRole("heading", { name: experienceWithProjects.title }).length,
			).toBeGreaterThanOrEqual(1);
			expect(
				screen.getByRole("link", { name: experienceWithProjects.company }),
			).toBeDefined();
			expect(screen.getByText(experienceWithProjects.location)).toBeDefined();
		});

		it('should have projects component"', () => {
			expect(screen.queryAllByTestId(experienceProjectsTestId).length).toBeGreaterThanOrEqual(1);
			expect(screen.queryByTestId(expCardNoProjectsPropTestId)).toBeNull();
		});
	});

	describe("test experienceCard without projects", () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<ExperienceCard>{experienceWithoutProjects}</ExperienceCard>
				</Provider>,
			);
		});
		it('should render component"', () => {
			expect(screen.getByTestId(experienceCardTestId)).toBeDefined();
		});

		it('should display component text"', () => {
			expect(
				screen.queryAllByRole("heading", { name: experienceWithoutProjects.title }).length,
			).toBeGreaterThanOrEqual(1);;
			expect(
				screen.getByRole("link", { name: experienceWithoutProjects.company }),
			).toBeDefined();
			expect(screen.getByText(experienceWithoutProjects.location)).toBeDefined();
		});

		it('should not have projects component"', () => {
			expect(screen.queryAllByTestId(experienceProjectsTestId).length).toBe(0);
			expect(screen.getByTestId(expCardNoProjectsPropTestId)).toBeDefined();
		});

		it('should have customItemList component', () => {
			expect(screen.getByTestId(customItemListTestId)).toBeDefined()
		})
	});
});
