import * as helpers from './index'
import * as vscode from 'vscode'
import { enableFolderIcons, disableFolderIcons, checkFolderIconsStatus } from "../commands/folders"

/** Store the latest version number in the user data settings. */
export const updateVersionInUserDataSettings = () => {
	const setting = {
		version: helpers.getCurrentExtensionVersion(),
	}
	return helpers.writeUserDataSettings(setting)
}

/** Initialize the user data settings. */
export const initUserDataSettings = () => {
	const setting = {
		name: 'vscode-great-icons',
		version: helpers.getCurrentExtensionVersion()
	}
	return helpers.writeUserDataSettings(setting)
}

/** Watch for changes in the configurations to update the icons theme. */
export const watchForConfigChanges = () => {
	vscode.workspace.onDidChangeConfiguration(configChangeDetection)
}

/**
 * Compare the workspace and the user configurations
 * with the current setup of the icons.
*/
export const configChangeDetection = () => {
	return compareFolderConfigs()
}

const compareFolderConfigs = () => {
	const folderIconsConfig = helpers.getThemeConfig('folders.enable')

	return checkFolderIconsStatus().then(result => {
		if (folderIconsConfig.workspaceValue === true || folderIconsConfig.globalValue === true) {
			if (!result) { enableFolderIcons() }
		}
		else if (
			(folderIconsConfig.workspaceValue === false && folderIconsConfig.globalValue === false) ||
			(folderIconsConfig.workspaceValue === undefined && folderIconsConfig.globalValue === false) ||
			(folderIconsConfig.workspaceValue === false && folderIconsConfig.globalValue === undefined)) {

			if (result) { disableFolderIcons() }
		}
	})
}
