const rgbToHex = (r: number, g: number, b: number) => {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const regex = /(?<=\().+?(?=\))/gm;

export const changeRgbToHexFunction = (color: string) => {
	const regexResponse = (color.match(regex) as RegExpMatchArray)[0].toString();
	console.error(regexResponse);
	const colorArray: number[] = regexResponse
		.split(", ")
		.map((item: string) => Number(item));

	return rgbToHex(
		colorArray[0],
		colorArray[1],
		colorArray[2]
	);
};
