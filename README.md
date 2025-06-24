# OPI Dev Extension Pack

<div style="text-align: center; margin: 20px 0;">
  <img src="icon.png" alt="OPI Icon" width="200" style="background-color: white; padding: 10px; display: inline-block; border-radius: 10px;">
</div>

## Overview

This extension pack is designed for developers working with TypeScript, React, Nginx, SSH, Python, MongoDB, Git and more. It bundles a set of powerful extensions to streamline and optimize your development workflow.

## Installation

1. Download the extension pack from the [GitHub Releases](https://github.com/kislev-opi/opi-dev-extension-pack/releases/latest) for your desierd VSCODE version.
2. Open Visual Studio Code and navigate to the Extensions view.
3. Install the extension pack via "Install from VSIX".
4. Add the following recommended settings to your workspace (open your workspace settings.json):

```json
{
  "workbench.colorTheme": "Monokai Pro",
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  }
}
```

5. Add the following recommended keyboard bindings to your workspace (open your workspace keybindings.json):

```json
[
  {
    "key": "ctrl+c",
    "command": "editor.action.triggerSuggest",
    "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
  },
  {
    "key": "ctrl+[IntlBackslash]",
    "command": "workbench.action.terminal.toggleTerminal",
    "when": "terminal.active"
  }
]
```

## Included Extensions

### Frontend Development

| Extension ID                     | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| dsznajder.es7-react-js-snippets  | Supplies handy React/ES7 snippets to speed up development                   |
| esbenp.prettier-vscode           | Auto-formats code for JavaScript, TypeScript, and other supported languages |
| formulahendry.auto-rename-tag    | Automatically renames matching HTML/XML tags                                |
| ms-vscode.vscode-typescript-next | Supports cutting-edge TypeScript features                                   |
| dbaeumer.vscode-eslint           | Integrates ESLint for real-time linting in JavaScript and TypeScript        |
| yoavbls.pretty-ts-errors         | Improves TypeScript error messages with explanations and formatting         |

### Backend Development

| Extension ID                       | Description                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------- |
| ahmadalli.vscode-nginx-conf        | Provides syntax highlighting and configuration support for Nginx            |
| mongodb.mongodb-vscode             | Integrates MongoDB support and querying directly from VS Code               |
| ms-azuretools.vscode-docker        | Enables Docker container management and integration                         |
| ms-python.black-formatter          | Formats Python code with the Black formatter                                |
| ms-python.debugpy                  | Debugs Python applications efficiently via debugpy                          |
| ms-python.mypy-type-checker        | Provides static type checking for Python using MyPy                         |
| ms-python.python                   | Adds extensive Python language support including IntelliSense and debugging |
| ms-python.vscode-pylance           | Accelerates and enhances Python language features with fast IntelliSense    |
| ms-toolsai.jupyter-keymap          | Offers optimized key mappings for Jupyter Notebook interactions             |
| ms-vscode-remote.remote-containers | Facilitates development in containerized environments                       |
| raynigon.nginx-formatter           | Auto-formats Nginx configuration files                                      |

### Development Utilities

| Extension ID                          | Description                                                       |
| ------------------------------------- | ----------------------------------------------------------------- |
| christian-kohler.path-intellisense    | Offers intelligent path suggestions during development            |
| eamodio.gitlens                       | Enhances Git insights; shows who last edited the current line     |
| irongeek.vscode-env                   | Simplifies management of environment variables                    |
| mhutchie.git-graph                    | Visualizes Git history with an intuitive graph interface          |
| ms-vscode-remote.remote-ssh           | Enables remote development over SSH                               |
| ms-vscode-remote.remote-ssh-edit      | Simplifies remote file editing over SSH                           |
| ms-vscode.remote-explorer             | Provides a dedicated explorer view for remote resources           |
| rangav.vscode-thunder-client          | Offers REST client capabilities for API testing                   |
| streetsidesoftware.code-spell-checker | Detects and highlights spelling errors in code and markdown files |
| wayou.vscode-todo-highlight           | Highlights and organizes TODO comments effectively                |

### Themes & Appearance

| Extension ID                     | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| monokai.theme-monokai-pro-vscode | Applies the renowned Monokai Pro color scheme      |
| pkief.material-icon-theme        | Applies a clean, modern material design icon theme |

## Credits

Developed by Kislev Levy
