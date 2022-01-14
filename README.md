# Learn Express

Express is a powerful and flexible Javascript framework for creating web servers and APIs.

## Installation

- Install instructions [here](https://expressjs.com/en/starter/installing.html).
- List of commands below:

  - `mkdir myapp`
  - `cd myapp`
  - `npm init` (accept defaults)
  - `npm install express --save`

## Setup styling

- Install `prettier` from `vscode`.
- Install `eslint` from the `repo` - `npm install eslint --save`
- Configure `eslint` settings - `node_modules/.bin/eslint --init` (choose `airbnb`)
- vscode setting as below:

  ```json
  "[javascript]": {
      "editor.tabSize": 2,
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
  }
  ```

## Table of contents

| #   | Lesson              | Example                                                                              |
| --- | ------------------- | ------------------------------------------------------------------------------------ |
| 1   | App setup to listen | [src](https://github.com/wccalvin/learn-express/tree/main/myapp/01-setup-app-listen) |
