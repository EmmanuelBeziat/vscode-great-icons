import { readdirSync } from "fs";
import { Icon } from "./types/Icon";

const array: string[] = [];
readdirSync("icons").forEach((file) => array.push(file.split(".")[0]));

const folderList: Icon = array.reduce((acc, name) => {
	return { ...acc, [`${name}`]: { iconPath: `./icons/folders/${name}.svg` }}
}, {});

const iconList: Icon = array.reduce((acc, name) => {
  return { ...acc, [`${name}`]: { iconPath: `./icons/${name}.svg` } };
}, {});

const icons = {
	...folderList,
	...iconList,
}

export default icons;
