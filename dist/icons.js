"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const array = [];
(0, fs_1.readdirSync)("icons").forEach((file) => array.push(file.split(".")[0]));
const folderList = array.reduce((acc, name) => {
    return Object.assign(Object.assign({}, acc), { [`${name}`]: { iconPath: `./icons/folders/${name}.svg` } });
}, {});
const iconList = array.reduce((acc, name) => {
    return Object.assign(Object.assign({}, acc), { [`${name}`]: { iconPath: `./icons/${name}.svg` } });
}, {});
const icons = Object.assign(Object.assign({}, folderList), iconList);
exports.default = icons;
