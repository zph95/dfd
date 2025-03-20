# Data Flow Diagram Preview Extension

This Visual Studio Code extension provides a preview feature for `.dfd` files. When a `.dfd` file is opened, a preview button will appear, allowing users to generate and view the corresponding SVG representation of the data flow diagram.

## Features

- Opens a preview button when a `.dfd` file is opened.
- Generates an SVG file from the `.dfd` file using the command `data-flow-diagram <file-path>`.
- Displays the generated SVG in a webview panel.

## "dfd preview"-- data flow diagram preview.

dfd is a python command about generate data flow diagram from code.



### requeirment

install [data-flow-diagram](https://github.com/pbauermeister/dfd)

and config the commandPath in settings.json
"dfd.commandPath":"youpath/data-flow-diagram"

## Installation

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