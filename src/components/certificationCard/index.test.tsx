import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CertificationCard, { certificationCardTestId } from ".";
import { MicrosoftLogoImg } from "../../assets/svg/logos";
import { Provider } from "react-redux";
import store from "../../store";
import { microsoftLogoImgTestId } from "../../assets/svg/logos/MicrosoftLogoImg";

describe("test certificationCard component", () => {
	const certificate = {
		title: "title text",
		subtitle: "subtitle text",
		logo: <MicrosoftLogoImg />,
		certificate_link: "https://certification.pl/",
	};
	beforeEach(() => {
		render(
			<Provider store={store}>
				<CertificationCard certificate={certificate} />
			</Provider>,
		);
	})
	it('should render component"', () => {
		expect(screen.getByTestId(certificationCardTestId)).toBeDefined();
	});
	it('should display component text"', () => {
		expect(screen.getByRole("heading", { name: certificate.title })).toBeDefined();
		expect(screen.findByText(certificate.subtitle)).toBeDefined();
	});

	it('should display image', () => {
		expect(screen.findAllByTestId(microsoftLogoImgTestId)).toBeDefined();
	})

	it('should have button component"', () => {
		const buttonElement = screen.getByText('Open certification');
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveProperty('href', certificate.certificate_link)
	});
});
