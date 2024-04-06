"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
const media_1 = require("../defaults/media");
const helper_1 = require("../helper");
exports.default = Object.assign(Object.assign(Object.assign(Object.assign({}, (0, helper_1.make)(media_1.image, "image")), (0, helper_1.make)(media_1.audio, "audio")), (0, helper_1.make)(media_1.video, "video")), (0, helper_1.make)(media_1.font, "font"));
