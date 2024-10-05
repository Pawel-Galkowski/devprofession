import React from "react";
import "./Skills.css";
import SoftwareSkill from "./SoftwareSkills";
import { skills } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { ObjectType, SkillsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";

const SkillSection: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box className='skills-two-layers-layout'>
			{skills.map((item: SkillsProps, index) =>
				index % 2 === 0 ? (
					<Box className='skills-main-div' key={uuidv4()}>
						<Fade duration={2000} direction='left'>
							<Box className='skills-image-div'>{item.image}</Box>
						</Fade>

						<Box className='skills-text-div'>
							<Fade duration={1000} direction='right'>
								<h1 className='skills-heading' style={{ color: theme.text }}>
									{item.title}
								</h1>
							</Fade>
							<Fade duration={1500} direction='right'>
								<SoftwareSkill skills={item.softwareSkills} />
							</Fade>
							<Fade duration={2000} direction='right'>
								<ul className='custom-list-style'>
									{item.descriptions.map((skillSentence: string) => (
										<li
											className='subTitle skills-text'
											style={{ color: theme.secondaryText }}
											key={uuidv4()}
										>
											{skillSentence}
										</li>
									))}
								</ul>
							</Fade>
						</Box>
					</Box>
				) : (
					<Box className='skills-main-div-second' key={uuidv4()}>
						<Box className='skills-text-div'>
							<Fade duration={1000} direction='left'>
								<h1 className='skills-heading' style={{ color: theme.text }}>
									{item.title}
								</h1>
							</Fade>
							<Fade duration={1500} direction='left'>
								<SoftwareSkill skills={item.softwareSkills} />
							</Fade>
							<Fade duration={2000} direction='left'>
								<ul className='custom-list-style'>
									{item.descriptions.map((skillSentence: string) => (
										<li
											className='subTitle skills-text'
											style={{ color: theme.secondaryText }}
											key={uuidv4()}
										>
											{skillSentence}
										</li>
									))}
								</ul>
							</Fade>
						</Box>
						<Fade duration={2000} direction='right'>
							<Box className='skills-image-div'>{item.image}</Box>
						</Fade>
					</Box>
				),
			)}
		</Box>
	);
};

export default SkillSection;
