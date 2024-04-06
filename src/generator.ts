import fileExtensions from "./icons/fileExtensions";
import fileNames from "./icons/fileNames";
import folderNames from "./icons/folderNames";
import languageIds from "./icons/languageIds"

const folderNamesExpanded = Object.keys(folderNames).reduce((acc, key) => {
  acc[key] = folderNames[key as keyof typeof folderNames] + '-open';
  return acc;
}, {} as Record<string, typeof folderNames[keyof typeof folderNames]>);

export default {
	file: "file",
	folder: "default",
	folderExpanded: "default_open",
	rootFolder: "root",
	rootFolderExpanded: "root-open",
	fileExtensions,
	fileNames,
	folderNames,
	folderNamesExpanded,
	languageIds,
};
