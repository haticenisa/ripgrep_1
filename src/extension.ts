import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('ripgrep-replace.search', async () => {

    const searchTerm = await vscode.window.showInputBox({
      prompt: 'Aramak istediğin metni gir (regex desteklenir)',
      placeHolder: 'console\\.log\\(.*\\)'
    });
    if (!searchTerm) return;

    const replaceTerm = await vscode.window.showInputBox({
      prompt: 'Yerine ne gelsin?',
      placeHolder: '// removed'
    });
    if (replaceTerm === undefined) return;

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
      vscode.window.showErrorMessage('Önce bir klasör aç!');
      return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const regex = new RegExp(searchTerm, 'g');

    let changedFiles = 0;
    let changedLines = 0;

    function scanDir(dirPath: string) {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
          scanDir(fullPath);
        } else if (stat.isFile() && /\.(ts|js|tsx|jsx|py|java|cs|cpp|go)$/.test(file)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (regex.test(content)) {
            regex.lastIndex = 0;