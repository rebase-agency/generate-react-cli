import {GeneratorComponent} from "../services/generator-component";
import { Command } from 'commander'
const packageJson = require('../../package.json')

export const cli = () => {
  const program = new Command();
  program
    .name("generate-react")
    .version(packageJson.version)
    .description(packageJson.description)

  program
    .argument("<component>", "The component name.")
    .argument("[path]", "The path where the component will get generated in.")
    .option("-s, --storybook", "Generate the component files for storybook project.")
    .option("-c, --context", "Generate the context files for project.")
    .option("-hk, --hook", "Generate the hook file with default code.")
    .action((component, path, options) => {
      const generatorComponent = new GeneratorComponent(path ?? '.', component)

      if (options.storybook) {
        generatorComponent.generateStorybook()
      } else if (options.hook) {
        generatorComponent.generateHook()
      } else if (options.context) {
        generatorComponent.generateContext()
      } else {
        generatorComponent.generateReact()
      }
    })

  program.parse()
}
