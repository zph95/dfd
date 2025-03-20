// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { PreviewPanel } from './webview/previewPanel';
export function activate(context: vscode.ExtensionContext) {
    
    console.log('DFD Preview extension is now active!');
    
	let disposable = vscode.commands.registerCommand('extension.previewDfd', async (uri: vscode.Uri) => {
        console.log('Preview DFD command triggered with URI:', uri?.fsPath);
        if (!uri) {
            vscode.window.showErrorMessage('No file selected. Please select a .dfd file to preview.');
            return;
        }
    
     // 获取用户配置的命令路径
    const config = vscode.workspace.getConfiguration('dfd');
    const commandPath = config.get<string>('commandPath', 'data-flow-diagram');

    try {
      // 执行 data-flow-diagram 命令
        const svgPath = await generateSvg(uri.fsPath, commandPath);
        if (svgPath) {
            vscode.window.showInformationMessage(`Generated SVG: ${svgPath}`);
            PreviewPanel.createOrShow(context.extensionUri, svgPath);
        } else {
            vscode.window.showErrorMessage('Failed to generate SVG.');
        }
        } catch (error) {
            if (error instanceof Error) {
                vscode.window.showErrorMessage(`Error: ${error.message}`);
            } else {
                vscode.window.showErrorMessage('An unknown error occurred.');
            }
        }
    });

    context.subscriptions.push(disposable);

    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument((document) => {
            if (document.languageId === 'plaintext' && document.fileName.endsWith('.dfd')) {
                const previewButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
                previewButton.text = 'Preview DFD';
                previewButton.command = 'extension.previewDfd';
                previewButton.show();
                context.subscriptions.push(previewButton);
            }
        })
    );

}

async function generateSvg(filePath: string, commandPath: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      // 推断输出文件路径
      const outputFilePath = path.join(
        path.dirname(filePath),
        `${path.basename(filePath, path.extname(filePath))}.svg`
      );
  
      // 构建命令
      const command = `${commandPath} "${filePath}"`;
  
      // 执行命令
      cp.exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          reject(new Error(stderr));
          return;
        }
  
        // 检查文件是否生成
        if (fs.existsSync(outputFilePath)) {
          resolve(outputFilePath);
        } else {
          reject(new Error('SVG file was not generated.'));
        }
      });
    });
  }


// This method is called when your extension is deactivated
export function deactivate() {}
