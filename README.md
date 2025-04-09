# OPI Dev Extension Pack

![OPI Icon](icon.png)

## Overview

This extension pack is designed for developers working with TypeScript, React, Nginx, SSH, Python, MongoDB, Git and more. It bundles a set of powerful extensions to streamline and optimize your development workflow.

## Installation

1. Download the extension pack from the [GitLab Releases](https://github.com/kislev-opi/opi-dev-extension-pack/releases/latest) (replace "#" with the actual URL).
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
  },
  "chat.agent.enabled": true // optional
}
```

## Included Extensions

| Extension ID                          | Description                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| ahmadalli.vscode-nginx-conf           | Provides syntax highlighting and configuration support for Nginx            |
| christian-kohler.path-intellisense    | Offers intelligent path suggestions during development                      |
| dbaeumer.vscode-eslint                | Integrates ESLint for real-time linting in JavaScript and TypeScript        |
| dsznajder.es7-react-js-snippets       | Supplies handy React/ES7 snippets to speed up development                   |
| eamodio.gitlens                       | Enhances Git insights; shows who last edited the current line               |
| esbenp.prettier-vscode                | Auto-formats code for JavaScript, TypeScript, and other supported languages |
| formulahendry.auto-rename-tag         | Automatically renames matching HTML/XML tags                                |
| irongeek.vscode-env                   | Simplifies management of environment variables                              |
| mhutchie.git-graph                    | Visualizes Git history with an intuitive graph interface                    |
| mongodb.mongodb-vscode                | Integrates MongoDB support and querying directly from VS Code               |
| monokai.theme-monokai-pro-vscode      | Applies the renowned Monokai Pro color scheme                               |
| ms-azuretools.vscode-docker           | Enables Docker container management and integration                         |
| ms-python.black-formatter             | Formats Python code with the Black formatter                                |
| ms-python.debugpy                     | Debugs Python applications efficiently via debugpy                          |
| ms-python.mypy-type-checker           | Provides static type checking for Python using MyPy                         |
| ms-python.python                      | Adds extensive Python language support including IntelliSense and debugging |
| ms-python.vscode-pylance              | Accelerates and enhances Python language features with fast IntelliSense    |
| ms-toolsai.jupyter-keymap             | Offers optimized key mappings for Jupyter Notebook interactions             |
| ms-vscode-remote.remote-containers    | Facilitates development in containerized environments                       |
| ms-vscode-remote.remote-ssh           | Enables remote development over SSH                                         |
| ms-vscode-remote.remote-ssh-edit      | Simplifies remote file editing over SSH                                     |
| ms-vscode.remote-explorer             | Provides a dedicated explorer view for remote resources                     |
| ms-vscode.vscode-typescript-next      | Supports cutting-edge TypeScript features                                   |
| pkief.material-icon-theme             | Applies a clean, modern material design icon theme                          |
| rangav.vscode-thunder-client          | Offers REST client capabilities for API testing                             |
| raynigon.nginx-formatter              | Auto-formats Nginx configuration files                                      |
| streetsidesoftware.code-spell-checker | Detects and highlights spelling errors in code and markdown files           |
| wayou.vscode-todo-highlight           | Highlights and organizes TODO comments effectively                          |

## Credits

Developed by Kislev Levy
