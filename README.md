# @rebase-agency/generate-react-cli

![version](https://img.shields.io/npm/v/@rebase-agency/generate-react-cli) [![License](https://img.shields.io/npm/l/express.svg)](https://github.com/rebase-agency/generate-react-cli/blob/master/LICENSE)

## Installation

```shell
npm install -g @rebase-agency/generate-react-cli
```

## Usage
```shell
generate-react [options] <component> [path]
```

## Generate Components

```shell
  npx generate-react Box ./src/components
```

This command will create a folder with your component name in the specified path (e.g. **src/components**) directory, and its corresponding files.

#### Example of the component files structure:

```
|-- /src
    |-- /components
        |-- /Box
            |-- Box.ts
            |-- Box.module.css
            |-- index.ts
```

## Options

<table>
  <tr align="left">
    <th>Options</th>
    <th>Description</th>
  </tr>
  <tr>
    <td width="20%"><b>-s</b></td>
    <td width="80%">
      Generate the component files for storybook project.  
    </td>
  </tr>
</table>
