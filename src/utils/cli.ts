import {GeneratorComponent} from "../services/generator-component";
import { Command } from 'commander'
const packageJson = require('../../package.json')

export const cli = () => {
  const program = new Command();
  program
    .name(packageJson.name)
    .version(packageJson.version)
    .description(packageJson.description)

  program
    .argument("<component>", "The component name.")
    .argument("[path]", "The path where the component will get generated in.")
    .option("-s, --storybook", "Generate the files for storybook project.")
    .action((component, path, options) => {
      const generatorComponent = new GeneratorComponent(path ?? '.', component)

      if (options.storybook) {
        generatorComponent.generateStorybook()
      } else {
        generatorComponent.generateReact()
      }
    })

  program.parse()
}
