export const make = (itemList: string[], scope: string) => {
	let obj = {};
	itemList.forEach(item => (obj = { [item]: scope, ...obj }));
	return obj;
};

export const expandPatterns = (pattern: string): string[] => {
	if (!pattern.includes('{')) {
		return [pattern];
	}

	const leftBraceIndex = pattern.indexOf('{');
	const rightBraceIndex = pattern.indexOf('}', leftBraceIndex);
	const prefix = pattern.substring(0, leftBraceIndex);
	const suffix = pattern.substring(rightBraceIndex + 1);
	const options = pattern.substring(leftBraceIndex + 1, rightBraceIndex).split(',');

	let expandedPatterns: string[] = [];

	options.forEach(option => {
		const newPattern = `${prefix}${option}${suffix}`;
		expandedPatterns = expandedPatterns.concat(expandPatterns(newPattern));
	});

	return expandedPatterns;
}
