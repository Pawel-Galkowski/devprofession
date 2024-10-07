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
import { Container } from "@mui/material";

const mainContentStyles = () => ({
	padding: "2rem 0 0",
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
			<Container sx={mainContentStyles} maxWidth='lg'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/education' element={<Education />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<ScrollTop />
			</Container>
			<Footer />
		</BrowserRouter>
	);
};
export default Main;
