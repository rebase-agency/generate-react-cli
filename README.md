# @rebase-agency/generate-react-cli

![version](https://img.shields.io/npm/v/@rebase-agency/generate-react-cli) [![License](https://img.shields.io/npm/l/express.svg)](https://github.com/rebase-agency/generate-react-cli/blob/master/LICENSE)

CLI for generating React component files. To help speed up productivity in React projects and stop copying, pasting, and renaming files each time you want to create a new component.

## Installation

```shell
npm install -g @rebase-agency/generate-react-cli
```

## Usage
```shell
npx generate-react [options] <component> [path]
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
            |-- Box.tsx
            |-- Box.module.css
            |-- index.ts
```

#### Example of the Storybook with option `-s` component files structure:

```
|-- /Box
    |-- Box.tsx
    |-- Box.module.css
    |-- Docs.mdx
    |-- Box.stories.tsx
    |-- README.md
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
  <tr>
    <td width="20%"><b>-c</b></td>
    <td width="80%">
      Generate the context files for project.
    </td>
  </tr>
  <tr>
    <td width="20%"><b>-hk</b></td>
    <td width="80%">
      Generate the hook file with default code.
    </td>
  </tr>
  <tr>
    <td width="20%"><b>-nf</b></td>
    <td width="80%">
      Generate only one React component (without export and css module files).
    </td>
  </tr>
</table>

## Generate public export file

This command will create a `index.ts` file with export yours components in the specified path (e.g. **src/components**) directory. The command overwrites the `index.ts` file.

```shell
npx generate-react export ./src/components
```

#### Example

For example, you have `./src/components` with the following component folders:

```
|-- /src
    |-- /components
        |-- /Box
        |-- /Button
        |-- /Card
        |-- /Modal
```

Then the `export` command will generate a file `index.ts` with the following content:

```tsx
export { Box } from "./Box";
export { Button } from "./Button";
export { Card } from "./Card";
export { Modal } from "./Modal";
```

## License

@rebase-agency/generate-react-cli is an open source software licensed as [MIT](https://github.com/rebase-agency/generate-react-cli/blob/main/LICENSE).
