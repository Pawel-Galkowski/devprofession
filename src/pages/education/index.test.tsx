import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Education, { educationTestId } from ".";
import { educationsContainerTestId } from "../../containers/education";
import { certificationsContainerTestId } from "../../containers/certifications";
import { topPageSectionTestId } from "../../components/topPageSection";

describe("test Education page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Education />
			</Provider>,
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(educationTestId)).toBeDefined();
		expect(screen.getByTestId(educationsContainerTestId)).toBeDefined();
		expect(screen.getByTestId(certificationsContainerTestId)).toBeDefined();
		expect(screen.getByTestId(topPageSectionTestId)).toBeDefined();
	});
});
