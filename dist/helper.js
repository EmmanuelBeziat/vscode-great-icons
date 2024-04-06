"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandPatterns = exports.make = void 0;
const make = (itemList, scope) => {
    let obj = {};
    itemList.forEach(item => (obj = Object.assign({ [item]: scope }, obj)));
    return obj;
};
exports.make = make;
const expandPatterns = (pattern) => {
    if (!pattern.includes('{')) {
        return [pattern];
    }
    const leftBraceIndex = pattern.indexOf('{');
    const rightBraceIndex = pattern.indexOf('}', leftBraceIndex);
    const prefix = pattern.substring(0, leftBraceIndex);
    const suffix = pattern.substring(rightBraceIndex + 1);
    const options = pattern.substring(leftBraceIndex + 1, rightBraceIndex).split(',');
    let expandedPatterns = [];
    options.forEach(option => {
        const newPattern = `${prefix}${option}${suffix}`;
        expandedPatterns = expandedPatterns.concat((0, exports.expandPatterns)(newPattern));
    });
    return expandedPatterns;
};
exports.expandPatterns = expandPatterns;
