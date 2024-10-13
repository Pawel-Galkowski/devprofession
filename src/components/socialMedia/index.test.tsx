import React from "react";
import { render, screen } from "@testing-library/react";
import SocialMedia, { socialMediaTestId } from ".";
import { Provider } from "react-redux";
import store from "../../store";
import { socialMediaLinks } from "../../data";

describe("test SocialMedia component", () => {
	describe("social media without elements", () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<SocialMedia />
				</Provider>,
			);
		});
		it('should not have any socialMedia links"', () => {
			const socialMediaElement = screen.getByTestId(socialMediaTestId);
			expect(socialMediaElement).toBeDefined();
			expect(socialMediaElement.children.length).toBe(0);
		});
	});

    describe("social media with all elements", () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<SocialMedia github linkedin gmail />
				</Provider>,
			);
		});
		it('should have all socialMedia links"', () => {
			const socialMediaElement = screen.getByTestId(socialMediaTestId);
			expect(socialMediaElement).toBeDefined();
			expect(socialMediaElement.children.length).toBe(3);

            expect(socialMediaElement.children[0])
            expect(socialMediaElement.children[0]).toHaveProperty("href", socialMediaLinks.github);
            expect(socialMediaElement.children[0]).toHaveProperty("target", "_blank");

            expect(socialMediaElement.children[1])
            expect(socialMediaElement.children[1]).toHaveProperty("href", socialMediaLinks.linkedin);
            expect(socialMediaElement.children[1]).toHaveProperty("target", "_blank");

            expect(socialMediaElement.children[2])
            expect(socialMediaElement.children[2]).toHaveProperty("href", `mailto:${socialMediaLinks.gmail}`);
            expect(socialMediaElement.children[2]).toHaveProperty("target", "_blank");
		});
	});

    describe("social media with only specific link", () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<SocialMedia linkedin />
				</Provider>,
			);
		});
		it('should have only linkedin link"', () => {
			const socialMediaElement = screen.getByTestId(socialMediaTestId);
			expect(socialMediaElement).toBeDefined();
			expect(socialMediaElement.children.length).toBe(1);

            expect(socialMediaElement.children[0])
            expect(socialMediaElement.children[0]).toHaveProperty("href", socialMediaLinks.linkedin);
            expect(socialMediaElement.children[0]).toHaveProperty("target", "_blank");
		});
	});
});
