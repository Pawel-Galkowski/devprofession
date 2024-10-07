import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Contact from "../pages/contact";
import Projects from "../pages/projects/Projects";
import Footer from "../components/footer";
import { Loader } from "../pages/loader";
import { NotFound } from "../pages/notFound";
import { ScrollTop } from "../components/scrollTopButton";
import NewHeader from "../components/header/header";
import { Box, Theme } from "@mui/material";

const mainContentStyles = (theme: Theme) => ({
	padding: "1rem 5% 0",
	maxWidth: "1500px",

	[theme.breakpoints.down("md")]: {
		padding: "1rem 1% 0",
	},
});

const Main: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	document.onreadystatechange = () => {
		setIsLoading(!(document.readyState === "complete"));
	};

	useEffect(() => {
		setIsLoading(document.readyState !== "complete");
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<BrowserRouter>
			<NewHeader />
			<Box sx={mainContentStyles}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/education' element={<Education />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<ScrollTop />
			</Box>
			<Footer />
		</BrowserRouter>
	);
};
export default Main;
