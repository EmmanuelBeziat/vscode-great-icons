import { writeFile } from "fs";
import generator from "./generator";
import icons from "./icons";

writeFile(
	"icons.json",
	JSON.stringify({
		hidesExplorerArrows: false,
		iconDefinitions: icons,
		...generator,
	}),
	(error) => {
		if (error) {
			console.log("[VSCode Great Icons] Error", error)
		}
	}
);
