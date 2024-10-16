import React from "react";
import { render, screen } from "@testing-library/react";
import Main, { mainTestId } from "./Main";
import { Provider } from "react-redux";
import store from "../store";
import { loaderTestId } from "../components/loader";

describe("test Main container", () => {
	const addEventListener = document.addEventListener;
	let mockReadySate = "complete";
	let eventListenerMock;

	beforeAll(() => {
		Object.defineProperty(document, "readyState", {
			get() {
				return mockReadySate;
			},
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
		document.addEventListener = addEventListener;
	});

	it('should have loader when content is not ready"', () => {
		mockReadySate = "loading";
		render(
			<Provider store={store}>
				<Main />
			</Provider>
		);
		expect(screen.findByTestId(loaderTestId)).toBeDefined();
	});

	it("myFunc should return correct value if document.readyState is already complete", async () => {
		mockReadySate = "complete";

		render(
			<Provider store={store}>
				<Main />
			</Provider>
		);
		expect(screen.findByTestId(mainTestId)).toBeDefined();
	});
});
