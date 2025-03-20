# Data Flow Diagram Preview Extension

This Visual Studio Code extension provides a preview feature for `.dfd` files. When a `.dfd` file is opened, a preview button will appear, allowing users to generate and view the corresponding SVG representation of the data flow diagram.

data-flow-diagram is a python command about generate data flow diagram from code.

## Features

- Opens a preview button when a `.dfd` file is opened.
- Generates an SVG file from the `.dfd` file using the command `data-flow-diagram <file-path>`.
- Displays the generated SVG in a webview panel.

## usage

1. Install the [data-flow-diagram](https://github.com/pbauermeister/dfd) tool. You can install it globally using `pip`:
   ```bash
   pip install data-flow-diagram
   ```

2. Configure the command path in your VS Code `settings.json` file. Add the following configuration:
   ```json
   {
     "dfd.commandPath": "path/to/data-flow-diagram"
   }
   ```
   - Replace `path/to/data-flow-diagram` with the actual path to the `data-flow-diagram` command. If installed globally, it might just be `data-flow-diagram`.

3. Ensure that the `data-flow-diagram` command is accessible from your terminal. You can verify this by running:
   ```bash
   data-flow-diagram --version
   ```

4. Open a `.dfd` file in VS Code, and click on the "Preview dfd" button to generate and preview the corresponding SVG diagram.

---

### Example Configuration

If you installed `data-flow-diagram` globally, your `settings.json` might look like this:
```json
{
  "dfd.commandPath": "data-flow-diagram"
}
```

If you installed it in a virtual environment or a specific directory, provide the full path:
```json
{
  "dfd.commandPath": "/home/user/.local/bin/data-flow-diagram"
}
```

---

### Troubleshooting

- If the preview does not work, ensure that:
  1. The `data-flow-diagram` command is installed and accessible.
  2. The `dfd.commandPath` in `settings.json` is correctly configured.
  3. The `.dfd` file is valid and follows the expected syntax.

- To debug, check the VS Code output panel for any error messages from the extension.

## devlopment

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vscode-dfd-preview
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Open the project in Visual Studio Code.

5. Press `F5` to run the extension in a new Extension Development Host window.

## Usage

1. Open a `.dfd` file in the editor.
2. Click the "Preview" button that appears in the editor toolbar.
3. The SVG representation of the data flow diagram will be displayed in a new panel.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.