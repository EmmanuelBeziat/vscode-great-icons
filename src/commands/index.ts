import * as helpers from './../helpers'
import * as vscode from 'vscode'
import { activateIconTheme } from "./activate"
import { hideFolders } from "./folders"
import { restoreDefaultConfig } from "./config"

// Activate theme
const activateThemeCommand = vscode.commands.registerCommand('extension.activateIcons', () => {
	activateIconTheme()
})

// Folders
const hideFoldersCommand = vscode.commands.registerCommand('extension.hideFolders', () => {
	hideFolders()
})

// Config
const restoreDefaultConfigCommand = vscode.commands.registerCommand('extension.restoreDefaultConfig', () => {
	restoreDefaultConfig()
})

export const commands = [
	activateThemeCommand,
	hideFoldersCommand,
	restoreDefaultConfigCommand
]
