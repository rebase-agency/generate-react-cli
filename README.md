# @rebase-agency/generate-react-cli

![version](https://img.shields.io/npm/v/@rebase-agency/generate-react-cli) [![License](https://img.shields.io/npm/l/express.svg)](https://github.com/rebase-agency/generate-react-cli/blob/master/LICENSE)

## Usage
```sh
@rebase-agency/generate-react-cli [options] <component> [path]
```

## Generate Components

```sh
  npx @rebase-agency/generate-react-cli Box ./src/components
```

This command will create a folder with your component name within your default (e.g. **src/components**) directory, and its corresponding files.

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
      Generate the files for storybook project.  
    </td>
  </tr>
</table>