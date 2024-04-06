import { Icon } from "./types/Icon";


function icon (name: string): Icon {
	return {[`_f_${name}`]: { iconPath: `./icons/${name}.svg` }};
}

function folder (name: string): Icon {
	return {[`_fd_${name}`]: { iconPath: `./icons/folders/${name}.svg` }};
}

const icons = {}

export default icons;
