/* eslint-disable @typescript-eslint/naming-convention */
import { image, audio, video, font } from "../defaults/media";
import { make } from "../helper";

export default {
	...make(image, "image"),
	...make(audio, "audio"),
	...make(video, "video"),
	...make(font, "font"),
}
