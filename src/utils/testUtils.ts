const regex = /(?<=\().+?(?=\))/gm;

export const changeRgbToHexFunction = (color: string) => {
	const regexResponse = (color.match(regex) as RegExpMatchArray)[0];
	const colorArray: number[] = regexResponse
		.split(", ")
		.map((item: string) => Number(item));

	return "#" + ((1 << 24) + (colorArray[0] << 16) + (colorArray[1] << 8) + colorArray[2]).toString(16).slice(1);
};
