import React from "react";
import { render, screen } from "@testing-library/react";
import TopPageSection, { topPageSectionTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";
import ContactImg, {
	contactImgTestId,
} from "../../assets/svg/images/ContactImg";
import { socialMediaTestId } from "../../components/socialMedia";
import { Box } from "@mui/material";

const additionalElementTestId = "additionalElement-testId";
const bodyText = "bodyText text";
const title = "titleText";
const innerText = "Scroll inner tekst";

describe("test TopPageSection page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<TopPageSection
					title={title}
					bodyText={bodyText}
					image={<ContactImg />}
					additionalElements={[
						<Box data-testid={additionalElementTestId}>{innerText}</Box>,
					]}
				/>
			</Provider>
		);
	});
	it('should render component"', () => {
		expect(screen.getByTestId(topPageSectionTestId)).toBeDefined();
	});
	it('should display component text"', () => {
		expect(screen.getByRole("heading", { name: title })).toBeDefined();
		expect(screen.findByText(bodyText)).toBeDefined();
	});

	it("should display image", () => {
		expect(screen.findByTestId(contactImgTestId)).toBeDefined();
	});

	it("should display additional elements", () => {
		const additionalElement = screen.getByTestId(additionalElementTestId);
		expect(additionalElement).toBeDefined();
		expect(additionalElement.innerHTML).toBe(innerText);
	});
});
