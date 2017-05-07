import * as helpers from './../helpers'
import * as vscode from 'vscode'
import { activateIconTheme } from "./activate"
import { hideFolders } from "./folders"

// Activate theme
const activateThemeCommand = vscode.commands.registerCommand('vscode-great-icons.activateIcons', () => {
	activateIconTheme()
})

// Folders
const hideFoldersCommand = vscode.commands.registerCommand('vscode-great-icons.hideFolders', () => {
	hideFolders()
})

export const commands = [
	activateThemeCommand,
	hideFoldersCommand
]
