const chalk = require('chalk');
const gradientString = require('gradient-string');
const balancedLineSplit = require('balanced-line-split');

function jumper(message, options = {}) {
	const { buildingStyle, personStyle, messageStyle, extraFloors, compact, gradient } = {
		buildingStyle: 'gray',
		personStyle: 'white',
		messageStyle: 'bold.white',
		extraFloors: 0,
		compact: false,
		gradient: false,
		...options
	};

	// Limit to 60 characters per line so we don’t go past 80 total.
	// The building and space accounts for 14 characters.
	let wrapped = balancedLineSplit(message, 3, 60);

	// Unless we’re in compact mode, insert padding between each word.
	// Easier to insert an extra space here than to mutate the array later.
	if (!compact) {
		wrapped = wrapped.replace(/\n/g, '\n \n');
	}

	// Apply a multiline gradient to the whole message.
	if (gradient) {
		const gradientName = gradient in gradientString ? gradient : 'pastel';
		wrapped = gradientString[gradientName].multiline(wrapped);
	}

	const lines = wrapped.split('\n').map((line) => {
		if (gradient) {
			return line;
		}

		return chalk`{${messageStyle} ${line}}`;
	});

	const output = [
		chalk`{${buildingStyle} ┓┏┓┏┓┃}`,
		chalk`{${buildingStyle} ┛┗┛┗┛┃} {${personStyle} ⟍ ○⟋}`,
		chalk`{${buildingStyle} ┓┏┓┏┓┃} {${personStyle}   ∕}    ${lines[0]}`,
		chalk`{${buildingStyle} ┛┗┛┗┛┃} {${personStyle} ノ)}    ${lines[1]}`,
		chalk`{${buildingStyle} ┓┏┓┏┓┃}        ${lines[2]}`
	];

	if (lines.length > 3) {
		const additionalLines = lines.slice(3);

		// If the array length is odd, add one to make it even.
		// Since each floor is two lines, we need to add two at a time.
		// This makes the loop a little clearner.
		if (additionalLines.length % 2 !== 0) {
			additionalLines.push(' ');
		}

		for (let i = 0; i < additionalLines.length; i += 2) {
			output.push(chalk`{${buildingStyle} ┛┗┛┗┛┃}        ${additionalLines[i]}`);
			output.push(chalk`{${buildingStyle} ┓┏┓┏┓┃}        ${additionalLines[i + 1]}`);
		}
	}

	for (let i = 0; i < extraFloors; i++) {
		output.push(chalk`{${buildingStyle} ┛┗┛┗┛┃}`);
		output.push(chalk`{${buildingStyle} ┓┏┓┏┓┃}`);
	}

	output.push(chalk`{${buildingStyle} ┃┃┃┃┃┃}`);
	output.push(chalk`{${buildingStyle} ┻┻┻┻┻┻}`);

	return output.join('\n');
}

module.exports = jumper;
