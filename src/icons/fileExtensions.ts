/* eslint-disable @typescript-eslint/naming-convention */
import { image, audio, video, font } from "../defaults/media";
import { make } from "../helper";

export default {
	...make(image, "_f_image"),
	...make(audio, "_f_audio"),
	...make(video, "_f_video"),
	...make(font, "_f_font"),
}
