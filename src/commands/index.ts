import * as helpers from './../helpers'
import * as vscode from 'vscode'
import { activateIconTheme } from "./activate"
import { toggleFolderIcons } from "./folders"
import { restoreDefaultConfig } from "./config"

// Activate theme
const activateThemeCommand = vscode.commands.registerCommand('extension.activateIcons', () => {
	activateIconTheme()
})

// Folders
const toggleFolderIconsCommand = vscode.commands.registerCommand('extension.toggleFolderIcons', () => {
	toggleFolderIcons()
})

// Config
const restoreDefaultConfigCommand = vscode.commands.registerCommand('extension.restoreDefaultConfig', () => {
	restoreDefaultConfig()
})

export const commands = [
	activateThemeCommand,
	toggleFolderIconsCommand,
	restoreDefaultConfigCommand
]
