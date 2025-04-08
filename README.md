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
  "chat.agent.enabled": true
}
```

## Included Extensions

| Extension ID                          | Description                    |
| ------------------------------------- | ------------------------------ |
| ahmadalli.vscode-nginx-conf           | Nginx configuration support    |
| christian-kohler.path-intellisense    | Smart path intellisense        |
| dbaeumer.vscode-eslint                | ESLint integration             |
| dsznajder.es7-react-js-snippets       | React snippets                 |
| eamodio.gitlens                       | Git enhancements               |
| esbenp.prettier-vscode                | Code formatter                 |
| formulahendry.auto-rename-tag         | Auto rename tags               |
| irongeek.vscode-env                   | Environment file support       |
| mhutchie.git-graph                    | Git graph visualization        |
| mongodb.mongodb-vscode                | MongoDB support                |
| monokai.theme-monokai-pro-vscode      | Monokai Pro theme              |
| ms-azuretools.vscode-docker           | Docker integration             |
| ms-python.black-formatter             | Python formatter               |
| ms-python.debugpy                     | Python debugger                |
| ms-python.mypy-type-checker           | Static type checker for Python |
| ms-python.python                      | Python language support        |
| ms-python.vscode-pylance              | Python language features       |
| ms-toolsai.jupyter-keymap             | Jupyter Notebook key mappings  |
| ms-vscode-remote.remote-containers    | Remote container development   |
| ms-vscode-remote.remote-ssh           | Remote SSH support             |
| ms-vscode-remote.remote-ssh-edit      | Remote SSH editing             |
| ms-vscode.remote-explorer             | Remote explorer                |
| ms-vscode.vscode-typescript-next      | Next-gen TypeScript support    |
| pkief.material-icon-theme             | Material icon theme            |
| rangav.vscode-thunder-client          | REST client support            |
| raynigon.nginx-formatter              | Nginx formatter                |
| streetsidesoftware.code-spell-checker | Spell checking                 |
| wayou.vscode-todo-highlight           | Highlight TODO comments        |

## Credits

Developed by Kislev Levy
