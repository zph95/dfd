import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class PreviewPanel {
  public static currentPanel: PreviewPanel | undefined;
  private readonly panel: vscode.WebviewPanel;
  private readonly extensionUri: vscode.Uri;

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this.panel = panel;
    this.extensionUri = extensionUri;
  }

  public static createOrShow(extensionUri: vscode.Uri, svgPath: string) {
     // 始终在右侧 (ViewColumn.Two) 打开
     const column = vscode.ViewColumn.Two;
     
    // 如果面板已存在，则直接显示
    if (PreviewPanel.currentPanel) {
      PreviewPanel.currentPanel.update(svgPath);
      PreviewPanel.currentPanel.panel.reveal(column);
      return;
    }

    // 创建新的 Webview 面板
    const panel = vscode.window.createWebviewPanel(
      'dfdPreview',
      'DFD Preview',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.file(path.dirname(svgPath))],
      }
    );

    PreviewPanel.currentPanel = new PreviewPanel(panel, extensionUri);
    PreviewPanel.currentPanel.update(svgPath);
  }

  public update(svgPath: string) {
    if (!fs.existsSync(svgPath)) {
      vscode.window.showErrorMessage(`SVG file not found: ${svgPath}`);
      return;
    }

    const svgContent = fs.readFileSync(svgPath, 'utf8');
    this.panel.webview.html = this.getHtmlForWebview(svgContent);
  }

  private getHtmlForWebview(svgContent: string): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DFD Preview</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f3f3;
          }
          svg {
            max-width: 100%;
            max-height: 100%;
          }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
      </html>
    `;
  }
}