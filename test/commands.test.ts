import * as assert from 'assert';
import * as vscode from 'vscode';
import * as folders from '../src/commands/folders';
import * as activate from '../src/commands/activate';
import * as helpers from '../src/helpers';

suite("commands", () => {
	test("enable folder icons", () => {
		return folders.enableFolderIcons().then(() => {
			return folders.checkFolderIconsStatus().then(result => {
				assert.equal(result, true);
			});
		});
	});

	test("disable folder icons", () => {
		return folders.disableFolderIcons().then(() => {
			return folders.checkFolderIconsStatus().then(result => {
				assert.equal(result, false);
			});
		});
	});
});
