import React from "react";
import { render, screen } from "@testing-library/react";
import CertificationCard, { certificationCardTestId } from ".";
import { MicrosoftLogoImg } from "../../assets/svg/logos";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store";

describe("test certificationCard", () => {
	const certificate = {
		title: "title",
		subtitle: "aaa",
		logo: <MicrosoftLogoImg />,
		certificate_link: "string",
	};
	beforeAll(() => {
		render(
			<Provider store={store}>
				<CertificationCard certificate={certificate} />
			</Provider>,
		);
	})
	it('should render component"', () => {
		expect(screen.getByTestId(certificationCardTestId)).toBeDefined(); // elements are not visible until fade accurs
	});
	it('should have button component"', () => {
		// expect(screen.getByTestId()).not.toBeNull();
	});
});
