"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const generator_1 = __importDefault(require("./generator"));
const icons_1 = __importDefault(require("./icons"));
(0, fs_1.writeFile)("icons.json", JSON.stringify(Object.assign({ hidesExplorerArrows: false, iconDefinitions: icons_1.default }, generator_1.default)), (error) => {
    if (error) {
        console.log("[VSCode Great Icons] Error", error);
    }
});
