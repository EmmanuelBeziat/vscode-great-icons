import * as reload from './../messages/reload'
import * as helpers from './../helpers'
import { enableFolderIcons } from "./folders"

export const restoreDefaultConfig = () => {
	return restore().then(() => {
		reload.showConfirmToReloadMessage().then(result => {
			if (result) helpers.reload()
		})
	})
}

/** Restore all configurations to default. */
const restore = () => {
	// Folders
	return enableFolderIcons().then(() => {
		if (helpers.getThemeConfig('folders.enable').workspaceValue === false)
			helpers.setThemeConfig('folders.enable', true)
		else if (helpers.getThemeConfig('folders.enable').globalValue === false)
			helpers.setThemeConfig('folders.enable', true, true)
	})
}
