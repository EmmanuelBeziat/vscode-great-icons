"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileExtensions_1 = __importDefault(require("./icons/fileExtensions"));
const fileNames_1 = __importDefault(require("./icons/fileNames"));
const folderNames_1 = __importDefault(require("./icons/folderNames"));
const languageIds_1 = __importDefault(require("./icons/languageIds"));
const folderNamesExpanded = Object.keys(folderNames_1.default).reduce((acc, key) => {
    acc[key] = folderNames_1.default[key] + '-open';
    return acc;
}, {});
exports.default = {
    file: "file",
    folder: "default",
    folderExpanded: "default_open",
    rootFolder: "root",
    rootFolderExpanded: "root-open",
    fileExtensions: fileExtensions_1.default,
    fileNames: fileNames_1.default,
    folderNames: folderNames_1.default,
    folderNamesExpanded,
    languageIds: languageIds_1.default,
};
